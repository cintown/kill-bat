# 第一章: 函数式编程和Lamda表达式

## 一. Lamda表达式
1. 箭头左边是输入，箭头右边是输出

### 1. 常见四种写法
```java
interface Interface1 {
	int doubleNum(int i);
}

public class LambdaDemo1 {

	public static void main(String[] args) {
		
		Interface1 i1 = (i) -> i * 2;

		// 常用写法
		Interface1 i2 = i -> i * 2;

		Interface1 i3 = (int i) -> i * 2;

		Interface1 i4 = (int i) -> {
			System.out.println("do sth.");
			return i * 2;
		};

	}

}
```


## 二. 函数接口
1. 只有一个`需要实现的`方法的接口
2. 可添加注解 -> @FunctionalInterface -> 编译期检查

### 1. 重要的函数接口

![2-1](https://s2.ax1x.com/2020/03/10/8PDwSs.md.png)

### 2. 常用函数接口的方法
> 学习函数接口，首先要了解的
1. 默认方法
	* 函数接口中除一个需要实现的方法以外，还可以有 `默认方法`
	* 方法前面加入 `default` 关键字，可在接口中写实现方法
2. 方法引用
	* lamda表达式箭头右边的执行体重只有一个函数调用
	* 且调用的参数与lamda表达式的参数一致
	* 则可以使用方法引用 -> `Class(对象)::method`
3. 类型推断
	* lamda会进行类型推断，若无法判断返回类型，可使用以下方法
	* 1. 结果强转
	* 2. 通过确定函数返回值类型
4. 变量引用
	* lamda实际上是内部类，内部类引用外部变量x，则x应该被声明为final
	* 原因是java传参的形式是`值传递`，而不是`引用传递`
	```note 
	1. 基本数据类型是值传递，不会改变原数据类型的值
	2. 对象对应的是引用传递，会拷贝一个副本进行更改，再赋回对象的引用，所以对象的值会变
	3. 基本数据类型的装箱类(如Integer)同样是引用传递，但是在赋值的时候会编译为`num = Integer.valueOf(10)`，即又会产生一个新的对象返回，所以原装箱类对象的值不会被更改
	``` 
5. 级联表达式
	* 有多个箭头的lamda表达式
	```java
	Function<Integer,Function<Integer,Integer>> func = x -> y -> x+y;
	func.apply(1).apply(2);
	```
	* 柯里化 -> 把多个参数的函数转化为多个只有一个参数的函数 -> 目的为将函数标准化
#### 2.1 Predicate<T>
```java
@FunctionalInterface
public interface Predicate<T> {
	// Evaluates this predicate on the given argument.
	// 根据给定的参数评估这个断言
	boolean test(T t);
	// Returns a composed predicate that represents a short-circuiting logical AND of this predicate and another.
	// 组合两个断言，返回一个复合断言
	// When evaluating the composed predicate, if this predicate is {@code false}, then the {@code other}predicate is not evaluated.
	// 在评估复合断言时候，如果第一个断言返回false，则不再评估第二个
	// Any exceptions thrown during evaluation of either predicate are relayed to the caller; 
	// 任何一个断言发生异常,则异常会被传送到断言的调用者
	// if evaluation of this predicate throws an exception, the {@code other} predicate will not be evaluated.
	// 如果一个断言评估时发生异常，则其他断言不会被评估
	default Predicate<T> and(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) && other.test(t);
    }
    // Returns a predicate that represents the logical negation of this predicate.
    // 返回一个逻辑相反的断言
    default Predicate<T> negate() {
        return (t) -> !test(t);
    }
    // Returns a composed predicate that represents a short-circuiting logical OR of this predicate and another. 
    // 返回一个会短路的or判断
    // When evaluating the composed predicate, if this predicate is {@code true}, then the {@code other}  predicate is not evaluated.
    // 如果第一个断言为true，则其他的不会执行
    // 异常同and方法
    default Predicate<T> or(Predicate<? super T> other) {
        Objects.requireNonNull(other);
        return (t) -> test(t) || other.test(t);
    }
    // 1.8之前的接口方法是abstract，所以不能有静态方法，因为静态方法不能被重载override
    // Returns a predicate that tests if two arguments are equal according to {@link Objects#equals(Object, Object)}.
    // 根据Objects#equals(Object, Object)来判断断言的两个参数是否相等
    static <T> Predicate<T> isEqual(Object targetRef) {
        return (null == targetRef)
                ? Objects::isNull
                : object -> targetRef.equals(object);
    }
}
```

#### 2.2 Consumer<T>
```java
@FunctionalInterface
public interface Consumer<T> {
	// Performs this operation on the given argument.
	// 根据给定参数执行方法
	void accept(T t);
	// Returns a composed {@code Consumer} that performs, in sequence, this operation followed by the {@code after} operation. 
	// 返回一个顺序执行的Consumer复合函数
	// If performing either operation throws an exception, it is relayed to the caller of the composed operation. 
	// 执行中不管哪个Consumer发生异常，则异常会被传送到调用者
	// If performing this operation throws an exception, the {@code after} operation will not be performed.
	// 如果一个操作发生异常，则后续的Consumer不会被执行
	default Consumer<T> andThen(Consumer<? super T> after) {
        Objects.requireNonNull(after);
        return (T t) -> { accept(t); after.accept(t); };
    }
}
```

#### 2.3 Function<T, R>
```java
@FunctionalInterface
public interface Function<T, R> {
	// Applies this function to the given argument
	// 接收T返回R
	R apply(T t);
	// Returns a composed function that first applies the {@code before} function to its input, and then applies this function to the result.
	// 返回一个聚合函数，先执行compose的参数（before），结果作为自己执行apply方法的参数
    // If evaluation of either function throws an exception, it is relayed to the caller of the composed function.
    // 如果有异常会被传递到调用者
	default <V> Function<V, R> compose(Function<? super V, ? extends T> before) {
        Objects.requireNonNull(before);
        return (V v) -> apply(before.apply(v));
    }
    // Returns a composed function that first applies this function to its input, and then applies the {@code after} function to the result.
    // 先执行自己，再执行after参数，自己作为after的参数
    default <V> Function<T, V> andThen(Function<? super R, ? extends V> after) {
        Objects.requireNonNull(after);
        return (T t) -> after.apply(apply(t));
    }
    // Returns a function that always returns its input argument.
    // 返回一个Function，这个Function永远返回它所接收的参数
    static <T> Function<T, T> identity() {
        return t -> t;
    }
}
```

#### 2.4 Supplier<T>
```java
@FunctionalInterface
public interface Supplier<T> {

    /**
     * Gets a result.
     * 空手提供一个T
     * @return a result
     */
    T get();
}
```

### 3. 函数接口简单使用方法
```java
// 先实现唯一的函数接口方法
Function<Integer, Integer> func = x -> x+1;
Function<Integer, String> func2 = y -> "3+1= "+y;
System.out.println(
	// 先执行apply，在执行andThen
	func.andThen(func2).apply(3)
	);

// 3+1= 4
```
<comment/>