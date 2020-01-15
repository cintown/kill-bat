# Reactor框架

## 一. 核心API
### 1. Mono
**定义：** 0-1 的非阻塞结果

**实现：** Reactive Streams JVM API `Publisher`

**类比：** 非阻塞Optional

**类似模式：** 点对点模式

![96-1](https://s2.ax1x.com/2020/01/15/lOXaCQ.png)

**图解：**

![96-2](https://s2.ax1x.com/2020/01/15/lOXLPe.md.png)

### 2. Flux

**定义：** 0-N 的非阻塞序列

**实现：** Reactive Streams JVM API Publisher

**类比：** 非阻塞`Stream`

**类似模式：** 发布者/订阅者模式

**图解：**

![96-3](https://s2.ax1x.com/2020/01/15/lOvyhF.md.png)

### 3. Scheduler

**定义：** Reactor 调度线程池
* 当前线程：Schedulers.immediate()
    * 等价关系：Thread.currentThread()
* 单复用线程：Schedulers.single()
    * 内部名称："single"
    * 线程名称："single"
    * 线程数量：单个
    * 线程idel时间：Long Live
    * 底层实现：ScheduledThreadPoolExecutor (core 1)
* 弹性线程池：Schedulers.elastic()
    * 内部名称："elastic"
    * 线程名称："elastic-evictor-{num}"
    * 线程数量：无限制（unbounded）
    * 线程idel时间：60 秒
    * 底层实现：ScheduledThreadPoolExecutor
* 并行线程池：Schedulers.parallel()
    * 内部名称："parallel"
    * 线程名称："parallel-{num}"
    * 线程数量：处理器数量
    * 线程idel时间：60 秒
    * 底层实现：ScheduledThreadPoolExecutor
