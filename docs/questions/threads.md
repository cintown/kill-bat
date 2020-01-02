# 多线程

## 为什么通信的方法 wait(),notify()和 notifyAll()被定义在 Object 类

wait-notify 机制是在获取到对象锁的前提下不同线程间的通信机制。在 java 中，任意对象都可以当做锁来使用，由于锁对象的任意性，所以这些通信方法需要被定义在 Object 类里

## 请说出常用的线程池

1. fixedThreadPool -> 可设置线程数量
2. singleThreadPool -> 唯一线程
3. cachedThreadPool -> 不限制线程数量
4. scheduledThreadPool -> 可定时执行

## 创建线程池的参数

1. corePoolSize -> 线程池的大小
2. maximumPoolSize -> 创建的最大线程数
3. keepAliveTime -> 空闲的线程被销毁时间
4. TimeUnit -> 时间单位
5. workQueue -> 阻塞队列
6. handler -> 线程拒绝策略





<comment-comment/>