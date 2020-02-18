# Springboot @Value获取配置文件中的值失效

**自动注入失效有以下两种可能**

## 1. 包没有被扫描到
定义一个扫描组件有两种方式：<br>
1. 如果你正在使用springboot，那么
    * 如果你需要扫描的包的层级，在注有@SpringBootApplication的启动类层级之下。springboot会隐式的扫描这些组件
    * 如果你的beans/components在其他包或者不在main package的子包下，你应该在启动类手动添加@ComponentScan指定
2. 如果你正在做一个JSP/Servlet或Spring MVC application没有用到springboot<br>
    那么  你会通过XML application context 或者 Java Application Context明确指定组件扫描路径
    
## 2. 调用者在某个类中，被使用new创建了实例

如果类A中存在成员属性B, B是通过@Autowired自动注入，而类A的实例是通过new的方式产生的，那么自动注入会失效的。<br>
此时通过Spring的**上下文**获取所有的Bean的方法来获取B



---
# 参考
* [`The IoC container` -> spring](https://docs.spring.io/spring/docs/3.2.x/spring-framework-reference/html/beans.html)
* [`Spring, Spring Boot and Component Scan`](http://www.springboottutorial.com/spring-boot-and-component-scan)
* [`Spring Boot @Autowired 注入失效问题` -> 双流小二郎](https://www.jianshu.com/p/f3c67ca457e6)


<comment/>