# 第五章：Feign 远程Http微服务接口调用

## 一. 引入依赖
### 1. Feign依赖
```xml
<!-- 引入 Feign, 可以以声明的方式调用微服务 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

### 2. Hystrix依赖
```xml
<!-- 引入服务容错 Hystrix 的依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```

## 二. 配置启动类
```java
@EnableFeignClients
@EnableCircuitBreaker // Hystrix断路
@EnableEurekaClient
@SpringBootApplication
```

## 三. 使用
1. 在调用方（消费者）声明feign调用接口
2. 实现这个接口作为`熔断降级`（保底）策略
3. 在接口中添加注释
    ```java
    // eureka-client-homepage-course 对应微服务名称 spring.application.name
    // CourseClientHystrix 接口实现类熔断降级策略
    @FeignClient(value = "eureka-client-homepage-course", fallback = CourseClientHystrix.class)
    ```
4. 远程Http调用
    ```java
    @RequestMapping(value = "/homepage-course/get/courses", method = RequestMethod.POST)
    List<CourseInfo> getCourseInfos(@RequestBody CourseInfosRequest request);
    ```

<comment/>
