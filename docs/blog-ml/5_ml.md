# 第五章：scikit-learn

## 一. 经典kNN算法
```python
import numpy as np
from math import sqrt
from collections import Counter


def kNN_classify(k, X_train, y_train, x):

    # 断言
    assert 1 <= k <= X_train.shape[0], "k must be valid"
    assert X_train.shape[0] == y_train.shape[0], \
        "the size of X_train must equal to the size of y_train"
    assert X_train.shape[1] == x.shape[0], \
        "the feature number of x must be equal to X_train"

    # 具体处理过程
    distances = [sqrt(np.sum((x_train - x)**2)) for x_train in X_train]
    nearest = np.argsort(distances)

    topK_y = [y_train[i] for i in nearest[:k]]
    votes = Counter(topK_y)

    return votes.most_common(1)[0][0]
```

## 二. kNN算法特殊性
* k近邻算法可以被认为是没有模型的算法
* 为了和其他算法统一，可认为训练数据集就是模型本身

![ml-5-1](https://s2.ax1x.com/2020/01/07/lcDqqe.md.png)


## 三. scikit-learn调用kNN算法
### 1. 数据准备
```python
raw_data_X = [[3.393533211, 2.331273381],
              [3.110073483, 1.781539638],
              [1.343808831, 3.368360954],
              [3.582294042, 4.679179110],
              [2.280362439, 2.866990263],
              [7.423436942, 4.696522875],
              [5.745051997, 3.533989803],
              [9.172168622, 2.511101045],
              [7.792783481, 3.424088941],
              [7.939820817, 0.791637231]
             ]
raw_data_y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

X_train = np.array(raw_data_X)
y_train = np.array(raw_data_y)

x = np.array([8.093607318, 3.365731514])
```
### 2. 实现
```python
# 引用KNeighborsClassifier
from sklearn.neighbors import KNeighborsClassifier
# 实例化KNeighborsClassifier对象，调用构造方法时可传入参数k
kNN_classifier = KNeighborsClassifier(n_neighbors=6)

# 构造模型
kNN_classifier.fit(X_train, y_train)

# 预测
kNN_classifier.predict(x)
> array([1])
# predict是待预测的数据而非结果

# 优化
# 预测10个数据，predict函数不希望一个一个传值，优化成一个数组进行调用，如果预测是1个数据，则也应该将其封装成数组进行调用
X_predict = x.reshape(1, -1)
y_predict = kNN_classifier.predict(X_predict)[0]
```


<comment-comment/><comment/>