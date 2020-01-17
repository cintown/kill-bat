# Reactive Programming使用场景

## 一. [Reactive Streams JVM](https://github.com/reactive-streams/reactive-streams-jvm)
> The main goal of Reactive Streams is to govern the exchange of stream data across an asynchronous boundary.

主要目的：
* 管理流式数据交换（ govern the exchange of stream data）
* 异步边界（asynchronous boundary）

## 二. [Spring Framework](https://docs.spring.io/spring/docs/5.0.7.RELEASE/spring-framework-reference/web-reactive.html#webflux-performance)
> Reactive and non-blocking generally do not make applications run faster. They can, in some cases, for example if using the `WebClient` to execute remote calls in parallel. On the whole it requires more work to do things the non-blocking way and that can increase slightly the required processing time
>
> The key expected benefit of reactive and non-blocking is the ability to scale with a small, fixed number of threads and less memory. That makes applications more resilient under load because they scale in a more predictable way

主要目的：
* 通常并非让应用运行更快速（generally do not make applications run faster）
* 利用较少的资源提升伸缩性（scale with a small, fixed number of threads and less memory）

图解：

![93-1](https://s2.ax1x.com/2020/01/15/lO5BTA.md.png)

## 三. [ReactiveX](http://reactivex.io/intro.html)
> The ReactiveX Observable model allows you to treat streams of asynchronous events with the same sort of simple, composable operations that you use for collections of data items like arrays. It frees you from tangled webs of callbacks, and thereby makes your code more readable and less prone to bugs

主要目的：
* 更好可读性（more readable）
* 减少 bugs（less prone to bugs）

核心技术：
* 异步（asynchronous）
* 同顺序（same sort）
* 组合操作（composable operations）

Java 原生技术限制：
* Stream 存在组合限制

## 四. [Reactor](http://projectreactor.io/docs/core/release/reference/#intro-reactive)
> Composability and readability
>
> Data as a flow manipulated with a rich vocabulary of operators
>
> Nothing happens until you subscribe
> 
> Backpressure or the ability for the consumer to signal the producer that the rate of emission is too high
> 
> High level but high value abstraction that is concurrency-agnostic

主要目的：
* 结构性和可读性（Composability and readability）
* 高层次并发抽象（High level abstraction）

核心技术：
* 丰富的数据操作符（ rich vocabulary of operators）
* 背压（Backpressure）
* 订阅式数据消费（Nothing happens until you subscribe）

Java 原生技术限制：
* Stream 有限操作符
* Stream 不支持背压
* Stream 不支持订阅

<comment-comment/><comment/>