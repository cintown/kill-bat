# 第十一章：Spring MVC

## 一. Spring MVC快速体验
### 1. 配置web.xml
Spring MVC之所以必须要配置web.xml,其实最关键的是要配置两个地方
#### 1.1 contextConfigLocation
这个参数就是使Web与Spring的配置文件相结合的一个关键配置
#### 1.2 DispatcherServlet
包含了Spring MVC的请求逻辑，Spring使用此类拦截Web请求并 进行相应的逻辑处理
### 2. 配置applicationContext.xml
主要声明`IntemalResourceViewResolver`对应的bean
#### 2.1 IntemalResourceViewResolver 
一个辅助bean,会在`ModelAndView`返回的视图名前加上 prefix 指定的前缀，再在最后加上suffix指定的后缀。<br>
例如：由于XXController返回的ModelAndView中 的视图名是testview,故该视图解析器将在/WEB-INF/jsp/testview.jsp处查找视图
### 3. 创建model
### 4. 创建controller
返回`ModelAndView`类型的实例，构造方法对应三个参数如下：
* 视图组件的逻辑名称。这里jsp的逻辑名称是userlist,视图解析器会使用该名称查找实际的View对象。
* 传递给视图的`model`对象的**名称**。
* 传递给视图的模型对象的**值**
### 5. 创建视图文件userlist.jsp
### 6. 创建Servlet配置文件 Spring-servlet.xml
* 在SimpleUrlHandlerMapping的属性中，设置页面和Controller的对应关系
* spring MVC是基于Servlet的实现，所以在Web启动的时候，服务器会首先尝试加载对应于Servlet的配置文件。<br>
    而为了让项目更加模块化，通常我们将Web部分的配置都存放于此配置文件中。

## 二. Spring MVC功能实现分析
### 1. 分析web.xml
#### 1.1 ContextLoaderListener
**作用：** <br>
1. 启动Web容器时，自动装配`ApplicationContext`的配置信息
2. 实现`ServletContextListener`接口，初始化`WebApplicationContext`实例并存放至`ServletContext`中
    * 在web.xml配置这个监听器，启动容器时， 就会默认执行它实现的方法
    * 使用`ServletContextListener`接口，开发者能够在为客户端请求提 供服务之前向`ServletContext`中添加任意的对象
    * 这个对象在`ServletContext`启动的时候被初始化，然后在`ServletContext`整个运行期间都是可见的
    * 每一个Web应用都有一个`ServletContext`与之相关联，`ServletContext`对象在应用启动时被创建，在应用关闭的时候被销毁，`ServletContext`在全局范围内有效

---

```txt
(1)前端控制器DispatcherServlet（配置即可）

功能:中央处理器,接收请求,自己不做任何处理,而是将请求发送给其他组件进行处理。DispatcherServlet 是整个流程的控制中心。

(2)处理器映射器HandlerMapping(配置即可)

功能:根据DispatcherServlet发送的url请求路径查找Handler

常见的处理器映射器:BeanNameUrlHandlerMapping,SimpleUrlHandlerMapping,

ControllerClassNameHandlerMapping,DefaultAnnotationHandlerMapping(不建议使用)

(3)处理器适配器HandlerAdapter（配置即可）

功能:按照特定规则（HandlerAdapter要求的规则）去执行Handler。

通过HandlerAdapter对处理器进行执行，这是适配器模式的应用，通过扩展多个适配器对更多类型的处理器进行执行。

常见的处理器适配器:HttpRequestHandlerAdapter，SimpleControllerHandlerAdapter，AnnotationMethodHandlerAdapter

(4)处理器Handler即Controller(程序猿编写)

功能:编写Handler时按照HandlerAdapter的要求去做，这样适配器才可以去正确执行Handler。

(5)视图解析器ViewReslover(配置即可)

功能:进行视图解析，根据逻辑视图名解析成真正的视图。

ViewResolver负责将处理结果生成View视图，ViewResolver首先根据逻辑视图名解析成物理视图名即具体的页面地址，再生成View视图对象，最后对View进行渲染将处理结果通过页面展示给用户。

springmvc框架提供了多种View视图类型,如:jstlView、freemarkerView、pdfView...

(6)视图View(程序猿编写)

View是一个接口，实现类支持不同的View类型（jsp、freemarker、pdf...）

```
<comment/>
