# 第五章：事务的传播

## 一. 事务的种类

### 1. REQUIRED
* 使用当前的事务，如果当前没有事务，则自己新建一个事务，子方法是必须运行在一个事务中的
* 如果当前存在事务，则加入这个事务，成为一个整体
* 常用于`增删改`操作

**举例：**
> 领导没饭吃，我有钱，我会自己买了自己吃；领导有的吃，会分给我一起吃

### 2. SUPPORTS
* 如果当前有事务，则使用事务；如果当前没有事务，则不使用事务
* 常用于`查询`操作

**举例：**
> 领导没饭吃，我也没饭吃；领导有饭吃，我也有饭吃

### 3. MANDATORY
* 该传播属性强制必须存在一个事务，如果不存在，则抛出异常
* IllegalTransactionStateException:No existing transaction found for transaction marked with propagation 'mandatory'

**举例：**
> 领导必须管饭，不管饭，没饭吃，我就不乐意了，就不干了（抛出异常）

### 4. REQUIRES_NEW
* 如果当前有事务，则挂起该事务，并且自己创建一个新的事务给自己使用
* 如果当前没有事务，则同 REQUIRED

**举例：**
> 领导有饭吃，我偏不要，我自己买了自己吃

### 5. NOT_SUPPORTED
* 如果当前有事务，则把事务挂起，自己不适用事务去运行数据库操作

**举例：**
> 领导有饭吃，分一点给你，我太忙了，放一边，我不吃

### 6. NEVER
* 如果当前有事务存在，则抛出异常
* IllegalTransactionStateException:No existing transaction found for transaction marked with propagation 'never'

**举例：**
> 领导有饭给你吃，我不想吃，我热爱工作，我抛出异常

### 7. NESTED
* 如果当前有事务，则开启子事务（嵌套事务），嵌套事务是独立提交或者回滚
* 如果当前没有事务，则同 REQUIRED
* 但是如果主事务提交，则会携带子事务一起提交
* 如果主事务回滚，则子事务会一起回滚。相反，子事务异常，则父事务可以回滚或不回滚

**举例：**
> 领导决策不对，老板怪罪，领导带着小弟一同受罪。小弟出了差错，领导可以推卸责任

## 二. 事务的传播
* REQUIRED 将父方法和子方法的事务合并成一个事务，如果有一个报错则全部回滚

* REQUIRES_NEW 会为方法加一个新的事务。如果该事务添加在子方法上，那么假如父方法有REQUIRED事务报错回滚，而子方法照样保存提交成功

* NESTED 嵌套父子事务是两个事务，父子事务一起提交或回滚的。同时子事务可以被try/catch住，父事务不受影响

## 三. 事务的使用方法

```java
// default
@Transactional(propagation = Propagation.REQUIRED)
```

## 四. 为什么不需要启动类开启事务

* springboot自动装配的时候已经加载
* @SpringBootApplication -> @EnableAutoConfiguration -> AutoConfigurationImportSeletor.class
    -> spring.factories -> TransactionAutoConfiguration


<comment/>
