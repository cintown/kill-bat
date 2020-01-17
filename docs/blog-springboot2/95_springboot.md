# Reactive Streams 规范

## 一. Reactive Streams定义
>Reactive Streams is a standard and specification for Stream-oriented libraries for the JVM that
> * process a potentially unbounded number of elements
> * in sequence,
> * asynchronously passing elements between components,
> * with mandatory non-blocking backpressure.

关键字：
* 潜在无界性（potentially unbounded）
* 序列（in sequence）
* 异步传递（asynchronously passing）
* 非阻塞背压（non-blocking backpressure）

## 二. API
### 1. Publisher
数据发布者，数据上游

**接口：**
```java
public interface Publisher<T> {
    public void subscribe(Subscriber<?superT> s);
}
```

### 2. Subscriber
数据订阅者，数据下游

**接口：**
```java
public interface Subscriber<T> {
    public void onSubscribe(Subscription s);
    public void onNext(T t);
    public void onError(Throwable t);
    public void onComplete();
}
```
信号事件：
* onSubscribe：当下游订阅时
* onNext：当下游接收数据时
* onComplete：当数据流（Data Streams）执行完成时
* onError：当数据流（Data Streams）执行错误时

### 3. Subscription
订阅信号控制

**接口：**
```java
public interface Subscription {
    public void request(long n);
    public void cancel();
}
```

信号操作:
* request：请求上游元素的数量
* cancel：请求停止发送数据并且清除资源

### 4. Processor
消息发布者和订阅者综合体

**接口：**
```java
public interface Processor<T, R> extends Subscriber<T>, Publisher<R> {
}
```

## 三. 完整了解一下背压（Backpressure）
### 1. [维基百科](https://en.wikipedia.org/wiki/Back_pressure)
> The term is also used analogously in the field of information technology to describe the build-up of data behind an I/O switch if the buffers are full and incapable of receiving any more data;the transmitting device halts the sending of data packets until the buffers have been emptied and are once more capable of storing information. It also refers to an algorithm for routing data according to congestion gradients (see backpressure routing).

关键字：
* I/O 切换（I/O switch）
* 缓冲填满（the buffers are full）
* 数据无法接受（incapable of receiving any more data）
* 传输设备（transmitting device）
* 停止发送数据包（halts the sending of data packets）

### 2. [Reactive Streams JVM](https://github.com/reactive-streams/reactive-streams-jvm#subscriber-controlled-queue-bounds)
> Backpressure is an integral part of this model in order to allow the queues which mediate between threads to be bounded
> 
> Since back-pressure is mandatory the use of unbounded buffers can be avoided. In general,the only time when a queue might grow without bounds is when the publisher side maintains a higher rate than the subscriber for an extended period of time, but this scenario is handled by backpressure instead

关键字：
* 线程和边界间调停（mediate between threads to be bounded）
* 发布者维持速率高于订阅者（publisher side maintains a higher rate than the subscriber）
* 背压处理（handled by backpressure）

### 3. [Reactor](http://projectreactor.io/docs/core/release/reference/#reactive.backpressure)
> Propagating signals upstream is also used to implement backpressure, which we described in the assembly line analogy as a feedback signal sent up the line when a workstation processes more slowly than an upstream workstation
> 
> The real mechanism defined by the Reactive Streams specification is pretty close to the analogy: a subscriber can work in unbounded mode and let the source push all the data at its fastest achievable rate or it can use the `request` mechanism to signal the source that it is ready to process at most `n` elements

关键字：
* Propagating signals upstream（传播上游信号）
* 无边界模式（unbounded mode）
* 处理最大元素数量（process at most n elements）

### 4. 总结背压
假设下游Subscriber工作在无边界大小的数据流水线时，当上游Publisher提供数据的速率快于下游Subscriber的消费数据速率时，下游Subscriber将通过传播信号（request）到上游Publisher，请求限制数据的数量（ Demand ）或通知上游停止数据生产

<comment-comment/><comment/>