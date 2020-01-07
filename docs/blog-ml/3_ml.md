# 第三章：Numpy

## 一.  Python List 的特点

### 1. 不限定类型
```python
l = [i for i in range(10)]
l[5]
> 5

l[5] = 'a'
print(l)
> [0,1,2,3,4,'a',6,7,8,9]
```

### 2. array
```python
import array
arr = array.array('i',[i for i in range(10)])
# 'i'指定数组为整形

arr[5] = 'a'
> TypeError!
```
### 3. 不具备向量矩阵运算等特点

## 二. numpy.array
### 1. 使用
```python
import numpy as np
nparr = np.array([i for i in range(10)])
# 同样只能存储一种数据类型
nparr[5] = 'a'
> ValueError!

nparr.dtype
> 'int64'

nparr2 = np.array([1,2,3.0])
nparr2.dtype
> 'float64'
```

### 2. 其他创建numpy.array
```python
# 获得全0向量或矩阵
np.zeros(10)
> [0.,0.,...]

np.zeros(10).dtype()
> 'float64'

np.zeros(10,dtype=int)
> 'int64'

# 创建元组矩阵
np.zeros((3,5))

# 获得全1向量或矩阵
np.ones((3,5))

# 获得指定数值的矩阵
np.full(shape=(3,5),fill_value=666.0)
> 元组矩阵为浮点数
```

### 3. arange & linspace
```python
np.arange(0,1,0.2)
# 步长可以为浮点型
> array([0.,0.2,0.4,0.6,0.8])

np.linspace(0,20,11)
# 终止点的数是包含在我们的数组中的
# 第三个参数代表包含起始点和终止点在内，我们一共要截多少的数
> array([0.,2.,4.,6.,8.,10.,12.,14.,16.,18.,20.])
```

### 4. random 随机数
```python
np.random.randint(0,10,10)
# [0,10)区间内随机生成10个数的数组
# 最后参数size可以是元组，生成结果为矩阵

np.random.seed(666)
# 显示指定随机种子

# 符合正态分布随机数
np.random.random()

np.random.normal(10,100,(3,5))
# 指定均值为10，方差为100，35矩阵
```
> 小知识：方差<br>
> 在统计描述中，方差用来计算每一个变量（观察值）与总体均数之间的差异<br>
> ![ml_3_1](https://s2.ax1x.com/2020/01/06/lyKe6U.png)<br>
> N简单理解为总个数


### 5. 基本属性
#### 5.1 查看是几维数组
x.ndim
#### 5.2 矩阵的形状
x.shape
> 返回(3,5)<br>
> 表明3行5列
#### 5.3 有几个元素
x.size

#### 5.4 访问多为数组中的元素
x[2,3]
> 访问2行3列

x[:2,:3]
> 访问前2行前3列

#### 5.5 numpy使用的引用传递
将矩阵赋值给新的矩阵（不使用.copy()，直接赋值），那么修改新的矩阵的数据同时也会修改老的矩阵数据

#### 5.6 对矩阵的维度进行更改
```python
x
> array([0,1,2,3,4,5,6,7,8,9])

x.reshape(2,5)
> array([[0,1,2,3,4],[5,6,7,8,9])

注意：x进行reshape不会改变x

x.reshape(10,-1)
# 我不管有几列，我只要有10行
```

### 6. 合并操作
```python
x = np.array([1, 2, 3])
y = np.array([3, 2, 1])

np.concatenate([x, y])

# 拼接元组
A = np.array([[1, 2, 3],
              [4, 5, 6]])
np.concatenate([A, A])

> array([[1, 2, 3],
       [4, 5, 6],
       [1, 2, 3],
       [4, 5, 6]])

# 按照列拼接
# axis默认为0，意为按照行拼接。可设定为1，则按照列拼接
np.concatenate([A, A], axis=1)

> array([[1, 2, 3, 1, 2, 3],
       [4, 5, 6, 4, 5, 6]])
       
       
# 不同维度拼接
# 1. 将低维数字reshape成高维数组
np.concatenate([A, z.reshape(1, -1)])
# 2. vstack函数，竖直方向合并
np.vstack([A, z])

> array([[  1,   2,   3],
       [  4,   5,   6],
       [666, 666, 666]])

# 3. hstack函数，水平方向合并
np.hstack([A, B])

```

### 7. 分割操作
```python
# 创建一个10位数组
x = arange(10)

x1, x2, x3 = np.split(x,[3,7])
> x1 :3 array([0, 1, 2])
> x2 3,7 array([3, 4, 5, 6])
> x3 7: array([7, 8, 9])


# 矩阵切割
A = np.arange(16).reshape((4, 4))

# 方法1
# 竖直方向切割，传入参数axis
A1, A2 = np.split(A, [2], axis=1)

# 方法2
# 水平
upper, lower = np.vsplit(A, [2])
# 竖直
left, right = np.hsplit(A, [2])


```






<comment-comment/>
