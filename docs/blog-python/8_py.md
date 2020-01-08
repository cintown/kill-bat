# 第八章：函数

## 一. 基本代码结构
```python
def funcname(parameter_list):
    pass
    
# 参数列表可以没有
# 可return
```

## 二. 返回多个结果
```python
def damage(skill1,skill2):
    damage1 = skill1 * 2
    damage2 = skill2 * 3 + 10
    return damage1,damage2
    
damages = damage(3,6)
# damages -> (6,28)
# 返回为元组类型（tuple）

# 或，序列解包

skill1_damage, skill2_damage = damage(3,6)

```
## 三. 序列解包
```python
a = 1
b = 2
c = 3

# 等同于

a,b,c = 1,2,3
```
了解以上知识点后，我们可以运用序列解包
```python
a = 1,2,3
b,c,d = a

# 则 b=1 c=2 d=3，注：解包的变量数目应与包数目相等
```

## 四. 链式赋值
```python
a,b,c = 3,3,3

# 等同于

a=b=c=3
```

## 五. 参数
### 1. 必须参数
函数的参数列表中定义的参数为必须参数
### 2. 实参和形参
实参 -> 为函数调用时传入的参数<br>
形参 -> 函数定义时设置的参数
### 3. 关键字参数
关键字参数可以指定为哪个形参赋值
```python
def add(x,y):
    return x+y
    
add(y=3,x=2)
```
### 4. 可变参数
方法的参数数量为可变的
```python
def demo(*param):
    print(param)
    
demo(1,2,3,4,5)
# param为元组类型

a = (1,2,3)
demo(*a)
# 输出为(1,2,3)

demo(a)
# 输出为((1,2,3))
```

### 5. 关键字可变参数
```python
def city_temp(**param):
    for key,value in param.items(): 
        print(key+':'+value)
# 字典需要调用items()拿到对应的值

city_temp(bj='23c',xm='33c',sh='34c')

# 如果传入字典
a = {'bj':'23c','xm':'33c','sh':'34c'}
city_temp(**a)
```

### 6. 变量作用域
需要注意的一点是：<br>
在方法内，for循坏的外部可以调用for循环内部的变量。这一点有别于Java，因为Python没有块级作用于的概念，for循环中的变量将被视为和函数的作用域一致

### 7. 全局变量
如果在方法内部想要定义全局变量怎么办？
```python
def demo():
    global c
    c = 2
    
demo()
print(c)

> 2
```
全局变量，在被导入其他模块（其他python文件）也可以使用

<comment-comment/>
