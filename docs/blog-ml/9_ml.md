# 第九章：回归算法衡量指标

## 一. 目标
* 我们之前了解过，评判一个优秀的算法就是训练数据集的真实值和预测值之间的差距尽可能小。我们计算这个误差可以使用绝对值的方法，但是我们更倾向可以使用将差值平方的方法（使函数可导）
* 对于测试数据我们也可以使用同样的方法

![ml-9-1](https://s2.ax1x.com/2020/01/08/lgb7in.md.png)

* 接着，我们发现一个问题，就是误差的标准是和m相关的，也就是说不同规模所得到误差数值是不具备说服力的
* 如何解决这个问题

## 二. 均方误差MSE（Mean Squared Error）

### 1. 公式

![ml-9-2](https://s2.ax1x.com/2020/01/08/lgbjLF.png)

* 我们看到这种方式是在上面的基础上除以了m，得到均方误差

### 2. 问题
* 通过这种方式还会产生一个问题，就是量纲（单位）的问题
* 单位是万元，做了平方除以一个常数，单位就是万元的平方，这样可能会造成麻烦
* 如何解决这个问题

## 三. 均方根误差RMSE（Root Mean Squared Error）
### 1. 公式
![ml-9-3](https://s2.ax1x.com/2020/01/08/lgbzdJ.png)

## 四. 平均绝对误差MAE（Mean Absolute Error）
### 1. 公式
![ml-9-4](https://s2.ax1x.com/2020/01/08/lgqPRx.png)

### 2. 问题
* 公式预测的结果有对应单位的限制
* 例如，预测房产相差5万元，预测分数相差10分，那么该算法到底是用在预测算法中好呢还是预测分数好呢？我们不得而知
 

## 四. R Squared
### 1. 公式
![ml-9-5](https://s2.ax1x.com/2020/01/08/lgqiz6.md.png)

![ml-9-6](https://s2.ax1x.com/2020/01/08/lgqKJI.png)
### 2. 分析

![ml-9-7](https://s2.ax1x.com/2020/01/08/lgq1Qf.md.png)

* R^2 <= 1
* R^2 越大越好。当我们的预测模型不犯任何错误时，R^2 得到最大值1
* 当我们的模型等于基准模型时，R^2为0
* 如果R^2<0，说明我们学习到的模型还不如基准模型。此时，很有可能我们的数据不存在任何线性关系

### 3. 整理

![ml-9-8](https://s2.ax1x.com/2020/01/08/lgqaYn.md.png)

### 4. sklean中的使用
```python
from sklearn.metrics import r2_score

r2_score(y_test, y_predict)
```
<comment-comment/>