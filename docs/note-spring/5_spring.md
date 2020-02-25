# 随笔-springcloud使用zuul构建微服务网关（API GateWay）


## 一. 背景
* 服务发现 -> Netflix Eureka

* 客服端负载均衡 -> Netflix Ribbon

* 断路器 -> Netflix Hystrix

* 服务网关 -> Netflix Zuul

* 分布式配置 -> Spring Cloud Config
## 二. 配置
### 1. 添加依赖
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-zuul</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-eureka</artifactId>
</dependency>
```
### 2. 添加配置文件
```yml
# application.yml

# 基础信息配置

spring:
  application:
    name: gateway-zuul # 应用名
server:
  port: 8768 #Zuul Server的端口号
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
  instance:
    prefer-ip-address: true



# 服务路由配置

# 路由配置方式一
#zuul:
#  routes:
#    springboot-rest-template-feign: /templateservice/** #所有请求springboot-rest-template-feign的请求，都会被拦截，并且转发到templateservice上
# 路由配置方式二
zuul:
  routes:
    api-contract: # 其中api-contract是路由名称，可以随便定义，但是path和service-id需要一一对应
      path: /templateservice/**
      service-id: springboot-rest-template-feign # springboot-rest-template-feign为注册到Eureka上的服务名
ribbon:
  NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RoundRobinRule # 配置服务端负载均衡策略 

```


> 由于需要将Zuul服务注册到Eureka Server上，同时从Eureka Server上发现注册的服务，所以加上了Eureka的依赖

## 三. 开启Zuul支持

```java
@SpringBootApplication
// 使用@EnableZuulProxy来开启Zuul的支持
// 如果不想使用Zuul提供的Filter和反向代理的功能的话，此处可以使用@EnableZuulServer注解
@EnableZuulProxy 
public class ZuulApplication {
  public static void main(String[] args) {
    SpringApplication.run(ZuulApplication.class, args);
  }
}
```

## 四. 配置filter
[传送门](https://blog.csdn.net/liuchuanhong1/article/details/62236793)
<comment/>