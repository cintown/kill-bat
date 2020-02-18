# 第一章：构建聚合工程

## 一. POM文件

### 1. 顶级工程
* 聚合工程的顶级工程所选用的packaging为pom
* 当子模块构建之后，在顶级工程的<module>标签中会有相应的模块显示
>

### 2. 子模块
* 子模块的默认打包方式为jar
* 子模块可以依赖同济的子模块，举例：
    ```xml
    <!--在子模块pojo工程中依赖common工程-->
    <dependency>
        <groupId>com.wt</groupId>
        <artifactId>dmblog-common</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>
    ```


<comment/>