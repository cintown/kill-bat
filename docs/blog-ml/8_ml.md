# 第八章：线性回归

## 一. 特点
* 解决回归问题
* 许多强大的非线性模型的基础
* 结果具有很好的可解释性
* 蕴含机器学习中的很多思想

## 二. 简单线性回归
![ml-8-1](https://s2.ax1x.com/2020/01/08/lgoycD.png)

![ml-8-2](https://s2.ax1x.com/2020/01/08/lgo7jg.md.png)

![ml-8-3](https://s2.ax1x.com/2020/01/08/lgoqBj.md.png)

* 机器学习算法的基本思路
> 通过分析问题，确定问题的损失函数或者效用函数<br>
> 通过最优化损失函数或者效用函数，获得机器学习模型

* 最小二乘法问题
> 两个参数a和b相减，可看做是“误差”，最小二乘法问题就是最小化误差的平方

### 1. 推导得出表达式

![ml-8-4](https://s2.ax1x.com/2020/01/08/lgov40.md.png)

`证明：`

* 求一个公式的极值，通常用求导的方式，当倒数等于0，说明找到了极值。
* 链式求导法则：若h(x)=f(g(x))，则h'(x)=f'(g(x))*g'(x)
* 我们分别对b，a求导

![ml-8-5](https://s2.ax1x.com/2020/01/08/lgTPu4.md.png)

#### 1.1 对b求导
![ml-8-6](https://s2.ax1x.com/2020/01/08/lgTlbd.md.png)
* 提取sigma
![ml-8-7](https://s2.ax1x.com/2020/01/08/lgTt8f.md.png)

#### 1.1 对a求导

![ml-8-8](https://s2.ax1x.com/2020/01/08/lgT0bj.md.png)

* 将b等于y的均值减a倍的x的均值带入，就得到了只有一个参数a的式子

![ml-8-9](https://s2.ax1x.com/2020/01/08/lgTzdA.md.png)

* 再做变形

![ml-8-10](https://s2.ax1x.com/2020/01/08/lg76wd.md.png)

### 2. 结论
![ml-8-11](https://s2.ax1x.com/2020/01/08/lg7HTs.md.png)

## 三. 根据表达式实现
```python
# 数据
x = np.array([1., 2., 3., 4., 5.])
y = np.array([1., 3., 2., 3., 5.])

# 计算x，y的均值
x_mean = np.mean(x)
y_mean = np.mean(y)

# 分子
num = 0.0
# 分母
d = 0.0

# 套用公式
for x_i, y_i in zip(x, y):
    num += (x_i - x_mean) * (y_i - y_mean)
    d += (x_i - x_mean) ** 2

# a表达式    
a = num/d

# b表达式
b = y_mean - a * x_mean

# 预测值公式
# y_hat = a * x + b
y_predict = a * x_predict + b
```
* 使用sklean实现

```python
def __init__(self):
    """初始化Simple Linear Regression 模型"""
    self.a_ = None
    self.b_ = None

def fit(self, x_train, y_train):
    """根据训练数据集x_train,y_train训练Simple Linear Regression模型"""
    assert x_train.ndim == 1, \
        "Simple Linear Regressor can only solve single feature training data."
    assert len(x_train) == len(y_train), \
        "the size of x_train must be equal to the size of y_train"

    x_mean = np.mean(x_train)
    y_mean = np.mean(y_train)

    num = 0.0
    d = 0.0
    for x, y in zip(x_train, y_train):
        num += (x - x_mean) * (y - y_mean)
        d += (x - x_mean) ** 2

    self.a_ = num / d
    self.b_ = y_mean - self.a_ * x_mean

    return self

def predict(self, x_predict):
    """给定待预测数据集x_predict，返回表示x_predict的结果向量"""
    assert x_predict.ndim == 1, \
        "Simple Linear Regressor can only solve single feature training data."
    assert self.a_ is not None and self.b_ is not None, \
        "must fit before predict!"

    return np.array([self._predict(x) for x in x_predict])

def _predict(self, x_single):
    """给定单个待预测数据x，返回x的预测结果值"""
    return self.a_ * x_single + self.b_
```
## 四. 优化公式 -> 向量化
### 1. 优化a所对应的的公式

![ml-8-12](https://s2.ax1x.com/2020/01/08/lgHEp6.png)

* 分子分母同属于以下结构，可看做是两个向量乘积

![ml-8-13](https://s2.ax1x.com/2020/01/08/lgH1ht.md.png)

* 优化之前类和（for循环）中代码

```python
# 原
num = 0.0
d = 0.0
for x, y in zip(x_train, y_train):
    num += (x - x_mean) * (y - y_mean)
    d += (x - x_mean) ** 2

self.a_ = num / d
    
# 改进
self.a_ = (x_train - x_mean).dot(y_train - y_mean) / (x_train - x_mean).dot(x_train - x_mean)
```
* 性能有可观提升

<comment/>
