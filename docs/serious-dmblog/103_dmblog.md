# 第三章：聚合工程集成springboot

## 一. 顶级工程的pom
```xml
<!--1.引入依赖 parent-->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.1.5.RELEASE</version>
    <relativePath />
</parent>

<!--2.设置资源属性-->
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <java.version>1.8</java.version>
</properties>

<!--3.引入依赖 dependency-->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
        <exclusions>
            <exclusion>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-logging</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-configuration-processor</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

* 版本号在父级（parent）工程中

## 二. application.yml
* 在resources目录下新建application.yml
* 设置约定端口
    ```yml
    ############################################################
    #
    # web访问端口号  约定：8088
    #
    ############################################################
    server:
      port: 8088
      tomcat:
        uri-encoding: UTF-8
      max-http-header-size: 80KB
    ```
* 配置数据源和数据库连接池 -> 采用HikariCP
    ```yml
    ############################################################
    #
    # 配置数据源信息
    #
    ############################################################
    spring:
      datasource:                                           # 数据源的相关配置
        type: com.zaxxer.hikari.HikariDataSource          # 数据源类型：HikariCP
        driver-class-name: com.mysql.cj.jdbc.Driver          # mysql驱动
        url: jdbc:mysql://localhost:3306/dmblog?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=GMT%2B8&useSSL=false
        username: root
        password: root
        hikari:
          connection-timeout: 30000       # 等待连接池分配连接的最大时长（毫秒），超过这个时长还没可用的连接则发生SQLException， 默认:30秒
          minimum-idle: 5                 # 最小连接数
          maximum-pool-size: 20           # 最大连接数
          auto-commit: true               # 自动提交
          idle-timeout: 600000            # 连接超时的最大时长（毫秒），超时则被释放（retired），默认:10分钟
          pool-name: DateSourceHikariCP     # 连接池名字
          max-lifetime: 1800000           # 连接的生命时长（毫秒），超时而且没被使用则被释放（retired），默认:30分钟 1800000ms
          connection-test-query: SELECT 1
    ```

## 三. Application.java
* main方法
    ```java
    public static void main(String[] args) {
        SpringApplication.run(Application.class,args);
    }
    ```
* 注解
    1. @SpringBootApplication -> springboot入口启动注解
    2. @ComponentScan(basePackages = {"com.wt","org.n3r.idworker"}) -> 扫描所有包及相关组件包,可传数组

<comment/>
