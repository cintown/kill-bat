# 第一章：springcloud预览

## 一. Eureka
* 提供服务注册和发现
* Eureka 包含两个组件：Eureka Server 和 Eureka Client

![1-1](https://s2.ax1x.com/2020/03/01/3ghT9P.md.png)

### 1. Eureka Server
* 节点间同步复制源信息，保证各节点中源信息统一

### 2. Eureka Client
* Eureka Client 在注册之后会向 Eureka Server 发起连接
* 将源信息发送给 Eureka Server

#### 2.1 服务注册
#### 2.2 心跳续约
#### 2.3 下线

### 3. 源信息
* Eureka Client 注册到 Eureka Server 上的信息
* 采用两层的hashMap保存

## 二. Zuul
* Zuul 是一个 API Gateway 服务器，本质上是一个web Servlet 应用
* Zuul 提供了动态路由、监控等服务，这些功能实现的核心是一系列的 filters

![1-2](https://s2.ax1x.com/2020/03/01/3g5kxf.md.png)

### 1. pre filters
* 在请求 `被路由之前` 调用
* 利用这种过滤器可实现：身份验证、在集群中选择请求的微服务、记录调试信息 等

### 2. routing filters
* 请求对应的微服务，微服务的结果返回给 routing filters

### 3. post filters
* 路由到微服务以后执行
* 可用来：为响应添加标准的HTTP头、收集统计信息和指标、将微服务相应返回给客户端 等

### 4. error filters
* 在HTTP请求过程中随时会调用

### 5. custom filters
* 自定义过滤器

## 三. Ribbon
* 负载均衡项目
* Ribbon 包括了两个部分：负载均衡算法 + app_name 到具体的 ip:port 映射

![1-3](https://s2.ax1x.com/2020/03/01/3gH1Df.md.png)

## 四. Feign
* 依赖于Ribbon
* 整合了Hystrix，实现熔断降级的功能
* 定义接口，并在接口上添加注解，消费者通过调用接口的形式进行服务消费

![1-4](https://s2.ax1x.com/2020/03/01/3gH2G9.md.png)

## 五. Hystrix
### 1. 主要解决问题

#### 1.1 服务雪崩

* 服务提供者的不可用，导致服务消费者的不可用，并将不可用逐渐放大的过程，最终导致整个系统的服务瘫痪

![1-5](https://s2.ax1x.com/2020/03/01/3gqkkD.md.png)

### 2. 三个特性

#### 2.1 断路器机制
* 当 Hystrix Command 请求后端服务失败数量超过一个阈值比例（默认50%），断路器就会切换到开路状态

#### 2.2 Fallback
* 降级回滚策略
* 请求失败有一个兜底的返回

#### 2.3 资源隔离
* 不通的微服务调用使用不同的线程池来管理
![1-6](https://s2.ax1x.com/2020/03/01/3gLDqP.md.png)
