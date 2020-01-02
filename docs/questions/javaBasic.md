# Java 基础

## 为什么重写 equals()方法需要重写 hashCode()方法.

1. Java 约定两个对象 equals()返回为 true，则 hashCode 必相等。
2. 如果只重写 equals()，在 get 值 equals 的 key 时，可能由于 key 的 hash 值不同而导致返回 null

hashMap 知识点 -> [传送门](../points/hashMap.md)

## hash 碰撞的解决办法

方法有很多，这里答案给出三种

1. 拉链法，HashMap 默认实现
2. 再哈希法
3. 开发地址法

## hashMap 的基本参数设置

1. 默认初始化容量是 16
2. 默认负载因子是 0.75
3. 容量的临界值为 12
4. 链表长度超过临界值 8 则进行红黑树化
5. 扩容为原来容量的 2 倍

## hashMap 的初始容量为什么是 2^n.

1. 源码：p = tab[i = (n - 1) & hash] 可简记为`(n - 1) & hash`
2. &运算提高了计算效率
3. n-1 保证为奇数，做&操作结果有奇有偶，提升了散列度

## hashMap 如何降低 hash 碰撞

1. 容量总为 2^n
2. 取 hash 值时使用了异或提高散列度

### hashMap 如何处理 hash 碰撞

1. 拉链法
2. 链表长度超过临界值 8 则进行红黑树化






<comment-comment/>