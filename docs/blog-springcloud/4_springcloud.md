# 第四章：配置Zuul网关

## 一. 添加依赖
### 1. Eureka 客户端依赖
```xml
<!--
    Eureka 客户端, 客户端向 Eureka Server 注册的时候会提供一系列的元数据信息, 例如: 主机, 端口, 健康检查url等
    Eureka Server 接受每个客户端发送的心跳信息, 如果在某个配置的超时时间内未接收到心跳信息, 实例会被从注册列表中移除
-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```
### 2. zuul依赖
```xml
<!-- 服务网关 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-zuul</artifactId>
</dependency>
```

## 二. 配置启动类
### 1. @EnableZuulProxy
* EnableZuulProxy: 标识当前的应用是 Zuul Server
### 2. @SpringCloudApplication
* SpringCloudApplication: 用于简化配置的组合注解
* 组合了 @SpringBootApplication + @EnableDiscoveryClient(Eureka client) + @EnableCircuitBreaker(Hystrix断路器)


## 三. 定义过滤器
### 1. 集成ZuulFilter并实现抽象方法
#### 1.1 filterType
* 过滤器类型，种类详见 -> [传送门](1_springcloud.md)

#### 1.2 filterOrder
* 数值越小，优先级越高， 与进程优先级类似
* 获取filter默认优先级 
    ```java
    FilterConstants.SEND_RESPONSE_FILTER_ORDER
    ```

#### 1.3 shouldFilter
* 是否启用过滤器，返回布尔类型

#### 1.4 run
* 具体过滤逻辑
* 可获取请求上下文
    ```java
    // 用于在过滤器之间传递消息。它的数据保存在每个请求的 ThreadLocal 中。它用于存储请求路由到哪里、错误、HttpServletRequest、
    // HttpServletResponse 都存储在 RequestContext中。RequestContext 扩展了 ConcurrentHashMap, 所以,
    // 任何数据都可以存储在上下文中。
    RequestContext ctx = RequestContext.getCurrentContext();

    // 存储客户端发起请求的时间戳
    ctx.set("startTime", System.currentTimeMillis());
    
    // ----------
    // 取出上下文
    RequestContext context = RequestContext.getCurrentContext();
    HttpServletRequest request = context.getRequest();
    // 从上下文中取出 PreRequestFilter 设置的请求时间戳
    Long startTime = (Long) context.get("startTime");
    // 取出对应路径
    String uri = request.getRequestURI();
    long duration = System.currentTimeMillis() - startTime;
    // 从网关通过的请求都会打印这条日志记录: uri + duration
    log.info("uri: " + uri + ", duration: " + duration / 100 + "ms");
    ```
### 2. 声明Bean
`@Component`

### 3. 给出全部filter实例代码
```java
//@Slf4j
@Component
public class PreRequestFilter extends ZuulFilter {

    @Override
    public String filterType() {

        // 过滤器的类型
        return FilterConstants.PRE_TYPE;
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {

        // 是否启用当前的过滤器
        return true;
    }

    @Override
    public Object run() {

        RequestContext ctx = RequestContext.getCurrentContext();

        ctx.set("startTime", System.currentTimeMillis());

        return null;
    }
}
```

## 四. 配置文件
### 1. application.yml
```yml
server:
  port: 9000
spring:
  application:
    name: homepage-gateway
eureka:
  client:
    service-url:
      defaultZone: http://server1:8000/eureka/

zuul:
  # 通过网关访问前缀
  prefix: /imooc
  routes:
    # 多个微服务
    course:
      path: /homepage-course/**
      # spring.application.name
      serviceId: eureka-client-homepage-course
      # strip-prefix为true，/homepage-course/前缀会被去除
      strip-prefix: false
    user:
      path: /homepage-user/**
      serviceId: eureka-client-homepage-user
      strip-prefix: false
```

* 不通过网关访问 -> 127.0.0.1:7001/homepage-course/get/course?id=
* 通过网关访问 -> 127.0.0.1:9000/imooc/homepage-course/get/course?id=


