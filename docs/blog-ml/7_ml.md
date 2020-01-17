# 第七章：数据归一化

## 一. 问题
![ml-7-1](https://s2.ax1x.com/2020/01/07/lcgs2R.md.png)

* 如果采取欧拉距离，我们发现样本见得距离被发现时间所主导
* 如果调整时间的计算单位为年，那么样本间距离又被肿瘤大小所主导

![ml-7-2](https://s2.ax1x.com/2020/01/07/lcggr6.md.png)

## 二. 解决
* 解决方案：就爱那个所有数据映射到统一尺度

### 1. 最值归一化
把所有数据映射到0-1之间，适用于分步有明显便捷的情况

![ml-7-3](https://s2.ax1x.com/2020/01/07/lcghIe.png)

```python
# 整形
x = np.random.randint(0, 100, 100) 
(x - np.min(x)) / (np.max(x) - np.min(x))

# 矩阵
X = np.random.randint(0, 100, (50, 2))
# 指定为float
X = np.array(X, dtype=float)
# 分别对第一列和第二列进行归一化
X[:,0] = (X[:,0] - np.min(X[:,0])) / (np.max(X[:,0]) - np.min(X[:,0]))
X[:,1] = (X[:,1] - np.min(X[:,1])) / (np.max(X[:,1]) - np.min(X[:,1]))

# 打印图像
plt.scatter(X[:,0], X[:,1])
plt.show()
```
![ml-7-4](https://s2.ax1x.com/2020/01/07/lcgbsP.png)

* 结果全部在0-1之间

### 均值方差归一化
把所有的数据归一到均值为0方差为1的分布中，适用于分步没有明显边界或存在极端数据值得情况<br>

![ml-7-5](https://s2.ax1x.com/2020/01/08/lgI2F0.png)

`Xmean 为均值，S 为方差`
```python
X2 = np.random.randint(0, 100, (50, 2))
X2 = np.array(X2, dtype=float)


X2[:,0] = (X2[:,0] - np.mean(X2[:,0])) / np.std(X2[:,0])
X2[:,1] = (X2[:,1] - np.mean(X2[:,1])) / np.std(X2[:,1])

# 打印图像
plt.scatter(X2[:,0], X2[:,1])
plt.show()

```
![ml-7-6](https://s2.ax1x.com/2020/01/08/lgITm9.png)

* 结果保证均值趋于0，方差趋于1
* 这样做的好处在于出现极端数值也能保证不是一个有偏的数据


## 三. 在机器学习中的使用

### 1. 测试数据集应该怎么进行归一化处理呢？
* 对于测试数据集，也应该使用我们的训练数据集的均值和方差进行计算
* (x_test - mean_train)/std_train
* 所以要保存训练数据集得到的均值和方差

### 2. sklearn中提供Scaler

![ml-7-7](https://s2.ax1x.com/2020/01/08/lgILY6.md.png)

```python
# 使用鸢尾花数据集
iris = datasets.load_iris()
X = iris.data
y = iris.target

# 训练数据与测试数据分离
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2, random_state=666)


# scikit-learn中的StandardScaler
# 在数据预处理的包中
from sklearn.preprocessing import StandardScaler 
standardScalar = StandardScaler() 

# 训练数据集，得到均值和方差
standardScalar.fit(X_train)

# 使用所得到的均值和方差，来归一化处理
# 训练数据归一化
X_train_standard = standardScalar.transform(X_train)
# 测试数据归一化
X_test_standard = standardScalar.transform(X_test) 


# 此时，我们可以运用kNN算法模型

from sklearn.neighbors import KNeighborsClassifier
knn_clf = KNeighborsClassifier(n_neighbors=3)
# 建立训练集归一化后的模型
knn_clf.fit(X_train_standard, y_train)
# 为测试集归一化后的模型打分
knn_clf.score(X_test_standard, y_test)

注意，此时不能传入没有归一化的数据！否则数据不正确

```

<comment-comment/><comment/>