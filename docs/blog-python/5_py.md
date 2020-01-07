# 第五章：工程组织结构

## 一. 大致结构
> 包
>> 模块
>>> 类
>>>> 函数、变量

## 二. 包和模块的名字
可以用“__init__.py”来标识一个包而不是文件夹

## 三. import导入模块
1. 代码结构
```python
import moudle_name as moudle

print(moudle.value)
```
2. 与from一起使用
```python
from moudle_name import value

print(value)

或

from moudle_name import *

print(value)
```
3. 使用__all__数组可控制暴露的变量
```python
# c1.py
__all__ = ['a','b']
a = '1'
b = '2'
c = '3'

# c2.py
from c1 import *

print(a)
print(b)
# print(c) 运行异常
```

4. 模块之间不允许循环引入
> 原因：<br>
> 模块1引入模块2的时候会执行被引入模块（模块2）的代码，而模块2初始化的时候又引入模块1，所以在模块1加载模块2时，由于元素没有初始化，会报错。






<comment-comment/>
