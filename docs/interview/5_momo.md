# 陌陌

![陌陌](https://s2.ax1x.com/2020/01/07/l6D8W6.jpg)

## 2019 年 8 月 26 日

### 面试岗位

#### 岗位名称

Java 开发工程师（商业）

#### 岗位要求

1. 计算机相关专业，三年以上 Java 开发经验，熟悉集合、并发、网络编程等；
2. 熟练掌握 OO 思想，具备扎实的抽象编程、设计能力，了解常用的设计模式；
3. 熟练掌握常用的数据结构与算法，了解 TCP/IP、HTTP 等网络协议；
4. 熟悉 MySQL 等关系型数据库，熟练掌握 SQL，熟悉 Redis，了解 MongoDB、HBase 等 NoSQL 数据库；
5. 熟练掌握常用的 Shell 命令，熟悉 Linux 平台运维；
6. 具备较强的学习能力和责任心，有良好的沟通能力。

### 面试地点

望京 - 阜通东大街 1 号望京 Soho

### 面试问题

#### 1. Redis 持久化的方法


#### 2. c1000k 问题 java 层面的优化方法

1. I/O 导致网络延迟，可使用 NIO 和 Netty。

2. 可以考虑服务降级服务熔断

#### 3. innodb 层级锁，什么时候用到表级锁

- innodb 是可以使用行级锁
- 只有在增删改查时匹配的条件字段带有索引，innodb 才会使用行级锁，不带索引，innodb 使用的将是表级锁

### 面试建议

陌陌使用的应该是自己搭建的一套基于 Redis 的框架，建议面试前多了解 Redis 底层及相关知识





<comment/>