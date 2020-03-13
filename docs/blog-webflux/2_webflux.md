# 第二章： Stream 流编程

## 一. 概念
* 是一个高级的迭代器
* 不是一个数据结构，不是集合，不会存放数据
* 类似于流水线处理思想

## 二. 外部迭代
* 使用for循环
* 串行的，需要自己拆分，构建线程池

```java
int[] nums = { 1, 2, 3 };
// 外部迭代
int sum = 0;
for (int i : nums) {
	sum += i;
}
System.out.println("结果为：" + sum);
```
## 三. 内部迭代
* 不需要关心实现细节
* 可做并行、短路处理

```java
int sum2 = IntStream.of(nums).sum();
System.out.println("结果为：" + sum2);
```

### 3.1 中间操作
* 返回stream的操作

### 3.2 终止操作
* 就不是返回stream，而是返回一个副作用(比如说值)

### 3.3 惰性求值
* 终止操作没有调用的情况下，中间操作不会执行

### 3.4 举例
```java
public class StreamDemo1 {

	public static void main(String[] args) {
		// 使用stream的内部迭代
		// map就是中间操作（返回stream的操作）
		// sum就是终止操作
		int sum2 = IntStream.of(nums).map(StreamDemo1::doubleNum).sum();
		System.out.println("结果为：" + sum2);

		System.out.println("惰性求值就是终止没有调用的情况下，中间操作不会执行");
		// 以下操作不会执行，所以不会有“执行了乘以2”的文字打印
		IntStream.of(nums).map(StreamDemo1::doubleNum);
	}

	public static int doubleNum(int i) {
		System.out.println("执行了乘以2");
		return i * 2;
	}

}
```

## 四.流操作

### 4.1 流创建
### 4.1.1 常见的创建方式
	![2-1](https://s1.ax1x.com/2020/03/13/8ngj5F.md.png)
### 4.1.2 举例
1. 从集合中创建
	```java
	List<String> list = new ArrayList<>();
	list.stream();
	list.parallelStream();
	```
2. 从数组创建
	```java
	Arrays.stream(new int[] { 2, 3, 5 });
	```
3. 创建数字流
	```java
	IntStream.of(1, 2, 3);
	// 创建一个范围的随机值
	IntStream.rangeClosed(1, 10);
	```
4. 使用random创建一个无限流
	```java
	new Random().ints().limit(10);
	Random random = new Random();
	```
5. 自定义流
	```java
	Stream.generate(() -> random.nextInt()).limit(20);
	```

### 4.2 流的中间操作
#### 4.2.1 常见的中间操作
![2-2](https://s1.ax1x.com/2020/03/13/8nIRhV.md.png)

1. 无状态操作 -> 当前操作与其他元素没有前后依赖关系
2. 有状态操作 -> 操作依赖于其他元素，如排序操作

#### 4.2.2 举例
```java
String str = "my name is 007";
```
1. map/filter 
	```java
	// 把每个单词的长度调用出来
	Stream.of(str.split(" ")).filter(s -> s.length() > 2)
		.map(s -> s.length()).forEach(System.out::println);
	```
2. flatMap
	```java
	// flatMap A->B属性(是个集合), 最终得到所有的A元素里面的所有B属性集合
	// intStream/longStream 并不是Stream的子类, 所以要进行装箱 boxed
	Stream.of(str.split(" ")).flatMap(s -> s.chars().boxed())
		.forEach(i -> System.out.println((char) i.intValue()));
	```
3. peek
	```java
	// peek 用于debug. 是个中间操作,和 forEach 是终止操作
	Stream.of(str.split(" ")).peek(System.out::println)
		.forEach(System.out::println);
	```
4. limit
	```java
	// limit 使用, 主要用于无限流
	new Random().ints().filter(i -> i > 100 && i < 1000).limit(10)
		.forEach(System.out::println);
	```

### 4.3 流的终止操作
#### 4.3.1 常见的终止操作
![2-3](https://s1.ax1x.com/2020/03/13/8nqutA.md.png)

#### 4.3.2 举例
```java
String str = "my name is 007";
```
1. forEach
	```java
	// 使用并行流，不能保证顺序
	str.chars().parallel().forEach(i -> System.out.print((char) i));
	```
2. forEachOrdered
	```java
	// 带'Ordered'的，都是与并行流相关保证顺序
	// 使用 forEachOrdered 保证顺序
	str.chars().parallel().forEachOrdered(i -> System.out.print((char) i));
	```
3. collect
	```java
	// 收集到list
	List<String> list = Stream.of(str.split(" ")).collect(Collectors.toList());
	```
4. reduce
	```java
	// 使用 reduce 拼接字符串，将多个流汇（减少）成一个
	Optional<String> letters = Stream.of(str.split(" "))reduce((s1, s2) -> s1 + "|" + s2);
	System.out.println(letters.orElse(""));

	// 带初始化值的reduce
	String reduce = Stream.of(str.split(" ")).reduce("",(s1, s2) -> s1 + "|" + s2);
	System.out.println(reduce);

	// 计算所有单词总长度
	Integer length = Stream.of(str.split(" ")).map(s -> s.length()).reduce(0, (s1, s2) -> s1 + s2);
	System.out.println(length);
	```
5. max
	```java
	// max 的使用
	Optional<String> max = Stream.of(str.split(" ")).max((s1, s2) -> s1.length() - s2.length());
	System.out.println(max.get());
	```
6. findFirst
	```java
	// 使用 findFirst 短路操作
	OptionalInt findFirst = new Random().ints().findFirst();
	System.out.println(findFirst.getAsInt());
	```
## 五. 并行流
### 1. 产生并行流
```java
public static void debug(int i) {
	System.out.println(Thread.currentThread().getName() + " debug " + i);
	try {
		TimeUnit.SECONDS.sleep(3);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}

public static void debug2(int i) {
	System.err.println("debug2 " + i);
	try {
		TimeUnit.SECONDS.sleep(3);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
}
```
#### 1.1 调用parallel 产生一个并行流
```java
IntStream.range(1, 100).parallel().peek(StreamDemo5::debug).count();
```
#### 1.2 调用sequential 产生串行流
```java
IntStream.range(1, 100).sequential().peek(StreamDemo5::debug).count();
```
#### 1.3 多次调用 parallel / sequential, 以最后一次调用为准
```java
IntStream.range(1, 100)
// 调用parallel产生并行流
.parallel().peek(StreamDemo5::debug)
// 调用sequential 产生串行流
.sequential().peek(StreamDemo5::debug2)
.count();
```
### 2. 并行流使用的线程池
1. 线程池为 `ForkJoinPool.commonPool`
2. 默认的线程数是 当前机器的cpu个数
3. 修改默认线程数
	```java
	System.setProperty("java.util.concurrent.ForkJoinPool.common.parallelism","20");
	```
4. 使用自定义线程池
	```java
	// 使用自己的线程池, 不使用默认线程池, 防止任务被阻塞
	// 线程名字 : ForkJoinPool-1
	ForkJoinPool pool = new ForkJoinPool(20);
	pool.submit(() -> IntStream.range(1, 100).parallel().peek(StreamDemo5::debug).count());
	// 记得将线程池关闭
	pool.shutdown();
	
	// 防止主程序退出
	synchronized (pool) {
		try {
			pool.wait();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	```
<comment/>