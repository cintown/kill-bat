# 第二章：springcloud基础环境搭建

## 一. 添加依赖
> 提醒：一个聚合模块顶级工程的打包方式应为pom
1. springcloud是构建于springboot之上的，需要相应的版本对应
    ```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.4.RELEASE</version>
    </parent>
    
    <properties>
        <spring-cloud.version>Greenwich.RELEASE</spring-cloud.version>
    </properties>
    ```

2. 可以定义依赖管理 -> dependcyManagement
    * 标识springcloud的版本，子模块在使用这些依赖的时候就不需要重复的指定版本了
    ```xml
    <!-- 标识 SpringCloud 的版本 -->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <!--这里对应的版本为 -> Greenwich.RELEASE-->
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    ```

3. 配置远程仓库 -> 如果maven在自己的远程仓库中找不到对应依赖，会在这里指定的仓库查找
    ```xml
    <!-- 配置远程仓库 -->
    <repositories>
        <repository>
            <id>spring-milestones</id>
            <name>Spring Milestones</name>
            <url>https://repo.spring.io/milestone</url>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </repository>
    </repositories>
    ```
