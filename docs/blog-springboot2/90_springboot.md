# 从Reactive到WebFlux


## 一. 温故

常用的几种模式：
1. Reactor -> 响应式编程 -> 同步非阻塞
2. Proactor模式 -> 异步非阻塞
3. Observer -> 观察者模式 -> 事件通知的模式
4. Iterator -> 迭代器模式
5. Java并发模型

## 二. 理解Reactive

### 1. 实现框架
* RxJava：Reactive Extensions
* Reactor：Spring WebFlux Reactive类库
* Flow API：Java 9 Flow API实现

### 2. 理解阻塞
官网观点归纳：
* 阻塞导致性能瓶颈和资源浪费
* 增加线程会引起资源竞争和并发相关问题
* 并行的方式不是银弹

举个例子：<br>

![90-1](https://s2.ax1x.com/2020/01/15/lLvra8.md.png)

结论：<br>
由于加载过程串行执行的关系，导致消耗实现线性累加。串行执行即Blocking模式

### 3. 理解并行

![90-2](https://s2.ax1x.com/2020/01/15/lLvfrq.md.png)

结论： <br>
相比阻塞执行性能和资源利用率都得到了提升，消耗时间取最大者

### 4. 但是
Reactor认为异步不一定能够救赎，观点归纳如下：
* Callbacks是解决非阻塞的方案，然而他们之间很难组合，并且快速地将代码引导至“Callback Hell”的不归路
* Futures相对于Callbacks好一点，不过还是无法组合，不过`CompletableFuture`能够提升这方面的不足

#### 4.1 什么是Callback Hell
当监听的维度增多时，Callback 实现也随之增多。同时，事件/监听者模式的并发模型可为同步或异步
> * Spring 事件/监听器（同步/异步）：
>   * 事件：`ApplicationEvent`
>   * 事件监听器：`ApplicationListener`
>   * 事件广播器：`ApplicationEventMulticaster`
>   * 事件发布器：`ApplicationEventPublisher`
> * Servlet 事件/监听器 ：
>   * 同步
>       * 事件：`ServletContextEvent`
>       * 事件监听器：`ServletContextListener`
>   * 异步
>       * 事件：`AsyncEvent`
>       * 事件监听器：`AsyncListener`

#### 4.2 理解Future阻塞问题
结论：<br>
`Future#get()`方法不得不等待任务执行完成。如果多个任务提交后，返回的多个Future逐一调用get()方法时，将会依次 blocking，任务的执行从并行变为串行

#### 4.3 理解Future链式问题
由于Future无法实现异步执行结果链式处理，尽管`FutureBlockingDataLoader`能够解决方法数据依赖以及顺序执行的问题，不过它将并行执行带回了阻塞（串行）执行。<br>
所以，它不是一个理想实现。不过`CompletableFuture`可以帮助提升Future的限制

举个例子：

```java
protected void doLoad() {
    CompletableFuture.runAsync(super::loadConfigurations)
                    .thenRun(super::loadUsers)
                    .thenRun(super::loadOrders)
                    .whenComplete((result, throwable) -> { // 完成时回调
                        System.out.println("加载完成");                
                    })                
                    .join(); // 等待完成    
     }
}
```
代码会在非主线程中执行，并且是在同一个线程中链式执行，所以对于主线程而言这是一个异步非阻塞的程序<br>

我们的时序图可以演化成这个样子↓<br>
![90-3](https://s2.ax1x.com/2020/01/15/lLvIaT.md.png)

#### 4.4 Reactive Streams JVM 认为异步系统和资源消费需要特殊处理
官网观点归纳：
* 流式数据容量难以预判
* 异步编程复杂
* 数据源和消费端之间资源消费难以平衡



<comment-comment/>
<comment/>
