# 第七章：单元测试

## 一. 引入依赖

```pom
<!--单元测试-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <!--作用域-->
    <scope>test</scope>
</dependency>
```

## 二. 测试类注解

```java
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
```

## 三. 测试方法注解

```java
@Test
```
