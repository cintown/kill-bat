# 基本数据类型


## 一. Number

### 1. 整数：int
### 2. 浮点数：float
> 浮点数与Java对比，java还存在：<br>
> 单精度（float）,双精度（double）<br>
> Python不必作区分<br>

注意：
```python
type(2/2)
> class 'float'

#如果是两个整形相除得到的是一个浮点数，如果想要结果得到整形，可以采用以下方式

type(2//2)
> class 'int'
```


### 3. bool
* bool类型应该归类于Number类型之下。
* 数字0和空都表示为假，其他皆为真

### 4. 复数
在数字结尾加上“j”，即可表示复数的概念

## 二. 字符串 str
### 单引号和双引号
* 单双引号可以在字符串中相互区分
```python
"let's go"
> let's go

'let"s go'
> let"s go
```

* 转义字符也可以来区分字符串中的特殊符号
```python
'let\'s go'
> let's go
```

### 多行字符串
```python
'''
hello world
hello world
hello world
'''
> \nhello world\nhello world\nhello world\n

# 或

"""
hello world
hello world
hello world
"""
> \nhello world\nhello world\nhello world\n
```

### 转义字符

常见字符有：
* \n 换行
* \r 回车
* \' 引号
* \t 横向指标符...
 
转义的另外一个方法：
```python
print(r'c:\north')
> 'c:\\north'
```
当一个字符串前面加上r，就变成了**原始字符串**，原始字符串所见即所得

### 字符串运算
1. 拼接字符串
```python
'hello'+'world'
> 'helloworld'
```
2. 重复字符串
```python
'hello' * 3
> 'hellohellohello'
# 不可用两个字符串相乘，否则编译器报错
```
3. 获取字符串对应位置字符
```python
'hello'[1]
> 'e'

'hello'[-1]
> 'o'

'hello'[0:4]  #[0,4)
> 'hell'

'hello'[0:-1] 
> 'hell'

'hello'[2:] 
> 'llo'
# 注：'hello'[2:0] 输出结果为''，如果要截取第二个字符以后的字符请使用以上的方法

'hello'[-2:] 
> 'lo'

'hello'[:-1] 
> 'hell'

'hello world'[0:8:2]
> 'hlow'
# 从第0位到第8位左闭右开区间，步长为2
```






<comment-comment/>
