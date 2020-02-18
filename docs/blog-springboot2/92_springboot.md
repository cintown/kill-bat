# Reactive Programming模型

## 一. 模型
> 参考资源：[WebFlux 编程模型](https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-programming-models)
### 1. 语言模型
响应式编程 + 函数式编程（可选）
### 2. 并发模型
多线程编程

### 3. 对立模型
命令式编程（Imperative programming）

> Reactive Programming：同步或异步非阻塞执行，数据传播被动通知<br>
> Imperative programming：同步阻塞执行，数据主动获取

## 二. 数据结构
> A stream is a sequence of ongoing events ordered in time
### 1. 流式（Streams）
### 2. 序列（Sequences）
### 3. 事件（Events）

## 三. 设计模式
### 1. 扩展模式：观察者（Observer） -> push-based
### 2. 对立模式：迭代器（Iterator） -> pull-based
### 3. 混合模式：反应堆（Reactor同步非阻塞）、Proactor异步非阻塞

**对比：**

An Observable(RxJava) is the asynchronous/push “dual” to the synchronous/pull Iterable

eventIterable|Iterable (pull)|Observable (push)
:--:|:--:|:--:
data|`T next()`|`onNext(T)`
discover error|throws `Exception`|`onError(Exception)`
complete|`!hasNext()`|`onCompleted()`

**结论：**

Reactive Programming 作为观察者模式（Observer）的延伸，在处理流式数据的过程中，并非使用传统的命令编程方式（Imperative programming）同步拉取数据，
如迭代器模式（Iterator），而是采用同步或异步非阻塞地推拉相结合的方式，响应数据传播时的变化

## 四. 并发模型（Concurrency Model）

* 非阻塞（Non-Blocking）
    * 同步（Synchronous）
    * 异步（Asynchronous）

**结论：**

屏蔽并发编程细节，如线程、同步、线程安全以及并发数据结构






<comment/>