# 第九章：类

## 一. 大致结构
类名建议首字母大写，并以驼峰式命名
```python
class Student():
# 定义类的全局变量
    name = ''
    age = 10
```
## 二. 方法
1. 一般方法
```python
    def print_file(self)
        print('name : ' + self.name)
        print('age : '+ str(self.age))
        
# 类的方法需定义self变量，但在真正调用时不用赋值
# self类似于Java中的this关键字

student = Student()
student.print_file()

> name : 
> age : 10
```
2. 构造函数
```python
class Student():
    # name = ''
    # age = 10
    sum = 0 # 类变量
    
    def __init__(self,name,age):
        self.name = name #实例变量
        self.age = age
        self.__class__.sum = 1
        
student.__init__()

student = Student()
# 注：
# student = Student() 默认会调用构造函数
# 构造函数不能有返回值
```

3. 类方法

当不涉及对象，只修改类的属性的时候建议使用类方法
```python
class Student():
    sum = 0
    
    @classmothed #类方法装饰器
    def plus_sum(cls):
        cls.sum += 1
        print(cls.sum)
```

4. 静态方法
* 静态方法参数不使用self关键字
* 需要@staticmethod 装饰器
* 类方法和静态方法都不能使用self获取对象的实例变量
```python
@staticmethod
def add(x,y):
    print(x+y)
```

## 三. 成员可见性
1. 私有方法 -> 在方法前面加上“__”
2. 共有方法 -> 普通命名或方法名前后添加“__”
3. 私有变量 -> python存储是会更改变量名为：_类名__私有变量名，通过访问这个格式的变量名可以间接访问私有变量
 

## 四. 继承
```python
# 在c6中定义People类
from c6 import People

class Student(People):

    def __init__(self,school,name,age):
        People.__init__(self,name,age) # 父类构造方法只有name,age两个参数
        
# 调用父类构造方法时候需要传入self参数
```
* super关键字
```python
super(Student,self).__init__(name,age)
```


<comment/>
