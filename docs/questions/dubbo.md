# Dubbo

## dubbo 架构模型

![dubbo架构模型](../.vuepress/public/javadubboarchitecture.jpg)

### 调用关系说明

0. 服务容器负责启动，加载，运行服务提供者。
1. 服务提供者在启动时，向注册中心注册自己提供的服务。
1. 服务消费者在启动时，向注册中心订阅自己所需的服务。
1. 注册中心返回服务提供者**地址列表**给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。
1. 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
1. 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

## dubbo 特性

1.启动检查

2.负载均衡

> - Random(默认)：随机
> - RoundRobin(主要):轮询
> - LeastActive(次要):最少活跃数调用
> - ConsistentHash:一致性 hash -> [传送门](../points/consistentHashing.md)

3.多协议支持 -> [传送门]()

4.异步调用
![dubbo异步调用](../.vuepress/public/javadubboyibudiaoyong.png)

5.结果缓存

## dubbo 服务暴露过程

Dubbo 会在 Spring 实例化完 bean 之后，在刷新容器最后一步发布 ContextRefreshEvent 事件的时候，通知实现了 ApplicationListener 的 ServiceBean 类进行回调 onApplicationEvent 事件方法，Dubbo 会在这个方法中调用 ServiceBean 父类 ServiceConfig 的 export 方法，而该方法真正实现了服务的（异步或者非异步）发布

## dubbo 与 zookeeper 交互

## dubbo 与 netty 交互






<comment-comment/>