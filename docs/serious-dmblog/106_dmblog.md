# 第六章：整合swagger2文档api

## 一. 添加swagger依赖
```xml
<!-- swagger2 配置 -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.4.0</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.4.0</version>
</dependency>
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>swagger-bootstrap-ui</artifactId>
    <version>1.6</version>
</dependency>
```
## 二. 添加swagger2配置类

```java
@Configuration
@EnableSwagger2
public class Swagger2 {

//    http://localhost:8088/swagger-ui.html     原路径
//    http://localhost:8088/doc.html     原路径

    // 配置swagger2核心配置 docket
    @Bean // 声明Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)  // 指定api类型为swagger2
                    .apiInfo(apiInfo())                 // 用于定义api文档汇总信息
                    .select()
                    .apis(RequestHandlerSelectors
                            .basePackage("com.wt.controller"))   // 指定controller包
                    .paths(PathSelectors.any())         // 所有controller
                    .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("弹幕博客接口api")        // 文档页标题
                .contact(new Contact("Meiracle",
                        "https://www.killbat.cn",
                        "meidanlong@qq.com"))        // 联系人信息
                .description("专为弹幕博客提供的api文档")  // 详细信息
                .version("1.0.1")   // 文档版本号
                .termsOfServiceUrl("https://www.wt.cn") // 网站地址
                .build();
    }

}
```

## 三. 优化文档界面显示

### 1. 文档忽略
```java
@ApiIgnore //在对应类的上方添加该注解，则该类将不会被编译在swagger文档内
```

### 2. 类标注
```java
@Api(value= "值", tag= {"标签"})
```

### 3. 方法标注
```java
@ApiOperation(value= "值", notes= "标注", httpMethod= "GET")
```

### 4. Pojo标注
```java
@ApiModel(value= "值", description= "描述")
```

### 5. 属性标注
```java
@ApiProperty(value= "值", name= "名称", example= "举例", require= true)
```

<comment/>