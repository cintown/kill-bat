# 第三章：配置Eureka Server

## 一. 添加依赖
### 1. 添加Eureka依赖
```xml
<!-- eureka server: 提供服务发现与服务注册 -->
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>
</dependencies>
```
### 2. 添加maven打包方式
> 该依赖maven插件在之后的子项目依赖中不再赘述
```xml
<!--
    SpringBoot的Maven插件, 能够以Maven的方式为应用提供SpringBoot的支持，可以将
    SpringBoot应用打包为可执行的jar或war文件, 然后以通常的方式运行SpringBoot应用
 -->
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>
```

## 二. 配置启动类
1. 需要使用 @EnableEurekaServer 注解让应用变为 Eureka Server
2. pom 文件中对应 spring-cloud-starter-netflix-eureka-server

## 三. 配置文件
### 1. application.yml
```yml
spring:
  application:
    name: homepage-eureka

server:
  port: 8000

eureka:
  instance:
    hostname: localhost
  client:
    # eureka.client.fetch-registry: 表示是否从 Eureka Server 获取注册信息，默认为true。
    fetch-registry: false
    # eureka.client.register-with-eureka: 表示是否将自己注册到 Eureka Server, 默认为true。
    register-with-eureka: false
    # 设置 Eureka Server 所在的地址，查询服务和注册服务都需要依赖这个地址
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```
## 四. 运行项目
`loacalhost:8000`

## 五. 搭建多节点Eureka
* springboot在加载配置文件的时候，最先加载 `bootstrap.yml` ，一些通用的配置可放在该文件中
### 1. bootstrap.yml
```yml
spring:
  application:
    name: homepage-eureka
  profiles: server1
server:
  port: 8000
eureka:
  instance:
    hostname: server1
    prefer-ip-address: false
  client:
    service-url:
      defaultZone: http://server2:8001/eureka/,http://server3:8002/eureka/

---
spring:
  application:
    name: homepage-eureka
  profiles: server2
server:
  port: 8001
eureka:
  instance:
    hostname: server2
    prefer-ip-address: false
  client:
    service-url:
      defaultZone: http://server1:8000/eureka/,http://server3:8002/eureka/

---
spring:
  application:
    name: homepage-eureka
  profiles: server3
server:
  port: 8002
eureka:
  instance:
    hostname: server3
    prefer-ip-address: false
  client:
    service-url:
      defaultZone: http://server1:8000/eureka/,http://server2:8001/eureka/
```

### 2. maven 运行jar包方式
1. mvn打包
    ```shell
    # 清理打包，不打包测试用例，强制执行
    mvn clean package -Dmaven.test.skip=true -U
    ```
2. 运行jar包
    ```shell
    # 指定server3profiles
    java -jar XXX.jar --spring.profiles.active=server3
    ```
