# 第一章: Lamda表达式

## 一. 常见四种写法
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
