# 第二章：jdk8新特性

## 一. 函数接口
× 只有一个`需要实现的`方法的接口
× 可添加注解 -> @FunctionalInterface -> 编译期检查
### 1. 重要的函数接口
```java
Function<T,R> sth;
sth.apply(1);
sth.andThen();
```

![2-1](https://s2.ax1x.com/2020/03/10/8PDwSs.md.png)
	

## 二. 默认方法
× 函数接口中除一个需要实现的方法以外，还可以有默认
× 方法前面加入`default`关键字，可在接口中写实现方法

## 三. 方法引用