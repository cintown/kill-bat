# 第四章：mybatis和mybatis逆向生成工具

## 一 mybatis-generator

### 1. 添加mybatis-generator的pom插件
```xml
<plugin>
    <groupId>org.mybatis.generator</groupId>
    <artifactId>mybatis-generator-maven-plugin</artifactId>
    <version>1.3.2</version>
    <configuration>
        <verbose>true</verbose>
        <overwrite>true</overwrite>
    </configuration>
</plugin>
```

### 2. 添加mybatis-generator的配置文件
>  sources/generatorConfig.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<generatorConfiguration>
    <!--导入属性配置-->
    <properties resource="datasource.properties"></properties>

    <!--指定特定数据库的jdbc驱动jar包的位置-->
    <classPathEntry location="${db.driverLocation}"/>

    <context id="default" targetRuntime="MyBatis3">

        <!-- optional，旨在创建class时，对注释进行控制 -->
        <commentGenerator>
            <property name="suppressDate" value="true"/>
            <property name="suppressAllComments" value="true"/>
        </commentGenerator>

        <!--jdbc的数据库连接 -->
        <jdbcConnection
                driverClass="${db.driverClassName}"
                connectionURL="${db.url}"
                userId="${db.username}"
                password="${db.password}">
        </jdbcConnection>


        <!-- 非必需，类型处理器，在数据库类型和java类型之间的转换控制-->
        <javaTypeResolver>
            <property name="forceBigDecimals" value="false"/>
        </javaTypeResolver>


        <!-- Model模型生成器,用来生成含有主键key的类，记录类 以及查询Example类
            targetPackage     指定生成的model生成所在的包名
            targetProject     指定在该项目下所在的路径
        -->
        <!--<javaModelGenerator targetPackage="com.wt.pojo" targetProject=".\\src\\main\\java">-->
        <javaModelGenerator targetPackage="com.wt.pojo" targetProject="./src/main/java">
            <!-- 是否允许子包，即targetPackage.schemaName.tableName -->
            <property name="enableSubPackages" value="false"/>
            <!-- 是否对model添加 构造函数 -->
            <property name="constructorBased" value="true"/>
            <!-- 是否对类CHAR类型的列的数据进行trim操作 -->
            <property name="trimStrings" value="true"/>
            <!-- 建立的Model对象是否 不可改变  即生成的Model对象不会有 setter方法，只有构造方法 -->
            <property name="immutable" value="false"/>
        </javaModelGenerator>

        <!--mapper映射文件生成所在的目录 为每一个数据库的表生成对应的SqlMap文件 -->
        <!--<sqlMapGenerator targetPackage="mapper" targetProject=".\\src\\main\\resources">-->
        <sqlMapGenerator targetPackage="mapper" targetProject="./src/main/resources">
            <property name="enableSubPackages" value="false"/>
        </sqlMapGenerator>

        <!-- 客户端代码，生成易于使用的针对Model对象和XML配置文件 的代码
                type="ANNOTATEDMAPPER",生成Java Model 和基于注解的Mapper对象
                type="MIXEDMAPPER",生成基于注解的Java Model 和相应的Mapper对象
                type="XMLMAPPER",生成SQLMap XML文件和独立的Mapper接口
        -->

        <!-- targetPackage：mapper接口mapper生成的位置 -->
        <!--<javaClientGenerator type="XMLMAPPER" targetPackage="com.wt.mapper" targetProject=".\\src\\main\\java">-->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.wt.mapper" targetProject="./src/main/java">
            <!-- enableSubPackages:是否让schema作为包的后缀 -->
            <property name="enableSubPackages" value="false" />
        </javaClientGenerator>


        <table tableName="article" domainObjectName="Article" enableCountByExample="false" enableUpdateByExample="false" enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false">
            <!--mybatis-generator不支持text，所以做类型转换-->
            <columnOverride column="introduce_md" jdbcType="VARCHAR" />
            <columnOverride column="introduce_html" jdbcType="VARCHAR" />
            <columnOverride column="content_md" jdbcType="VARCHAR" />
            <columnOverride column="content_html" jdbcType="VARCHAR" />
        </table>

        <table tableName="serious" domainObjectName="Serious" enableCountByExample="false" enableUpdateByExample="false" enableDeleteByExample="false" enableSelectByExample="false" selectByExampleQueryId="false">
            <!--mybatis-generator不支持text，所以做类型转换-->
            <columnOverride column="introduce_md" jdbcType="VARCHAR" />
            <columnOverride column="introduce_html" jdbcType="VARCHAR" />
        </table>

    </context>
</generatorConfiguration>
```

其中需要一些数据库的配置，我们再建立一个`datasource.properties`文件来配置这些信息

```properties
db.driverLocation=D:\\mine\\react-blog\\DmBlog\\dmblog-mybatis-generator\\src\\main\\resources\\mysql-connector-java-5.1.6-bin.jar
db.driverClassName=com.mysql.jdbc.Driver

db.url=jdbc:mysql://localhost:3306/dmblog?characterEncoding=utf-8
db.username=root
db.password=root


db.initialSize = 20
db.maxActive = 50
db.maxIdle = 20
db.minIdle = 10
db.maxWait = 10
db.defaultAutoCommit = true
db.minEvictableIdleTimeMillis = 3600000
```

除此之外，我们还需要[mysql-connector-java的jar包](https://github.com/Meidanlong/DmBlog/blob/master/dmblog-mybatis-generator/src/main/resources/mysql-connector-java-5.1.6-bin.jar)，有需要的小伙伴可以自行下载

### 3. 启动mybatis-generator
如果你已经配置好了相关文件和路径，那么你能够左侧的mybatis找到对应插件,点击即可启动

![104-1](https://s2.ax1x.com/2020/02/19/3EfVjs.th.png)

## 二. springboot集成mybatis

### 1. 添加相关依赖
```pom
<!-- mybatis -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.0</version>
</dependency>
```

### 2. 添加mybatis配置
```yml
mybatis:
  type-aliases-package: com.wt.pojo          # 所有POJO类所在包路径
  mapper-locations: classpath:mapper/*.xml, classpath:mymapper/*.xml      # mapper的xml映射文件
```


### 3. 在启动类指定mapper扫描路径

```java
// 扫描mybatis通用mapper所在的包
@MapperScan(basePackages = {"com.wt.mapper","com.wt.mymapper"})
```
