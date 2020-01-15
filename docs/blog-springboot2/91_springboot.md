# 初识Reactive

## 一. 定义
### 1. [The Reactive Manifesto](https://www.reactivemanifesto.org/)
> Reactive Systems are: Responsive, Resilient, Elastic and Message Driven

关键字：
* 响应的（Responsive）
* 适应性强的（Resilient）
* 弹性的（Elastic）
* 消息驱动的（Message Driven）

侧重点：
* 面向 Reactive 系统
* Reactive 系统原则

### 2. [维基百科](https://en.wikipedia.org/wiki/Reactive_programming)
> Reactive programming is a declarative programming paradigm concerned with **data streams** and the **propagation of change**.
 With this paradigm it is possible to express static (e.g. arrays) or dynamic (e.g. event emitters) data streams with ease, 
 and also communicate that an inferred dependency within the associated execution model exists, 
 which facilitates the automatic propagation of the changed data flow

关键字：
* 数据流（data streams）
* 传播变化（propagation of change）

侧重点：
* 数据结构
    * 数组（arrays）
    * 时间发射器（event emitters）
* 数据变化

技术连接：
* 数据流：Java 8 `Stream`
* 传播变化：Java `Observable`/`Observer`
* 事件：Java `EventObject`/`EventListener`

### 3. [Spring Framework](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-why-reactive)
> The term "reactive" refers to programming models that are built around **reacting to change** — network component reacting to I/O events, 
UI controller reacting to mouse events, etc. In that sense **non-blocking** is reactive because instead of being blocked we are now in the mode of reacting to notifications as operations complete or data becomes available

关键字：
* 变化相应（reacting to change）
* 非阻塞（non-blocking）

侧重点：
* 相应通知
    * 操作完成（operations complete）
    * 数据可用（data becomes available）
    
技术连接：
* 非阻塞：Servlet 3.1 `ReadListener`/`WriteListener`
* 响应通知：Servlet 3.0 `AsyncListener`

### 4. [ReactiveX](http://reactivex.io/intro.html)
> ReactiveX extends the observer pattern to support sequences of data and/or events and adds operators 
that allow you to compose sequences together declaratively 
while abstracting away concerns about things like low-level threading, synchronization, thread-safety, concurrent data structures, and non-blocking I/O

关键字：
* 观察者模式（Observer pattern ）
* 数据/事件序列（Sequences of data and/or events )
* 序列操作符（Opeators）
* 屏蔽并发细节（abstracting away...）

侧重点：
* 设计模式
* 数据结构
* 数据操作
* 并发模型

技术连接：
* 观察者模式：Java `Observable`/`Observer`
* 数据/事件序列：Java 8 `Stream`
* 数据操作：Java 8 `Stream`
* 屏蔽并发细节（abstracting away...）：`Exectuor`、`Future`、`Runnable`

### 5. [Reactor](https://projectreactor.io/docs/core/release/reference/)
> The reactive programming paradigm is often presented in object-oriented languages as an extension of the Observer design pattern. One can also compare the main reactive streams pattern with the familiar Iterator design pattern, as there is a duality to the Iterable-Iterator pair in all of these libraries. One major difference is that, while an Iterator is pull-based,reactive streams are push-based

关键字：
* 观察者模式（Observer pattern ）
* 响应流模式（Reactive streams pattern ）
* 迭代器模式（Iterator pattern）
* 拉模式（pull-based）
* 推模式（push-based）

侧重点：
* 设计模式
* 数据获取方式

技术连接：
* 观察者模式：Java `Observable`/`Observer`
* 响应流模式：Java 8 `Stream`
* 迭代器模式：Java  `Iterator`

### 6. 作者描述[@andrestaltz](https://twitter.com/andrestaltz)
> Reactive programming is programming with asynchronous data streams.
> 
> In a way, **this isn't anything new**. Event buses or your typical click events are really an asynchronous event stream, on which you can observe and do some side effects. Reactive is that **idea on steroids**. You are able to create data streams of anything, not just from click and hover events. Streams are cheap and ubiquitous, anything can be a stream: variables, user inputs, properties, caches, data structures, etc

关键字：
* 异步（asynchronous ）
* 数据流（data streams）
* 并非新鲜事物（not anything new）
* 过于理想化（idea on steroids）

侧重点：
* 并发模型
* 数据结构
* 技术本质

技术连接：
* 异步：Java `Future`
* 数据流：Java 8 `Stream`

<comment-comment/>
