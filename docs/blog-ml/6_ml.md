# 第六章：判定算法性能

## 一. 问题
### 1. 模型很差怎么办？
### 2. 真实环境难以拿到真实label

## 二. 原始数据与测试数据分离
![ml-6-1](https://s2.ax1x.com/2020/01/07/lcyZvV.png)
* 通过测试数据直接判断模型好坏
* 在模型进入真实环境前改进模型
 

## 三. sklearn中的train_test_split
```python
from sklearn.model_selection import train_test_split

# 最后一个参数为随机种子，如果想复现之前的结果，需设置随机种子
X_train, X_test, y_train, y_test 
    = train_test_split(X, y, test_size=0.2, random_state=666)

print(X_train.shape)
print(y_train.shape)
> (120, 4)
> (120,)

print(X_test.shape)
print(y_test.shape)
> (30, 4)
> (30,)
```

## 四. 预测结果
`预测值与真实值相同样本的数量 / 预测总数量`
```python
from sklearn.metrics import accuracy_score

accuracy_score(y_test, y_predict)
```

## 五. 超参数
* 超参数：在算法运行前需要决定的参数
* 模型参数：算法过程中学习的参数

### 1. 如何寻找
* 领域知识
* 经验数值
* 实验搜索

### 2. 距离权重
* 当参数为3，而目标点离红点最近，但是剩下两个点为蓝色，那么我根据近邻法判断它属于蓝色是不科学的
* 当候选的点各种颜色数量相等，那么随机选择一个颜色也是不科学的
* 为了解决以上问题，我们会根据候选点到目标点的距离的倒数作为权重，从而再来计算目标点应该属于哪一种颜色

```python
best_score = 0.0
best_k = -1
best_method = ""
for method in ["uniform", "distance"]:
    for k in range(1, 11):
        # 对于计算距离权重，我们需要给weights参数赋值为"distance"
        knn_clf = KNeighborsClassifier(n_neighbors=k, weights=method)
        knn_clf.fit(X_train, y_train)
        score = knn_clf.score(X_test, y_test)
        if score > best_score:
            best_k = k
            best_score = score
            best_method = method
        
print("best_method =", best_method)
print("best_k =", best_k)
print("best_score =", best_score)
```

### 3. 什么是距离？
* 我们之前所说的距离都是欧拉距离
* 另外一种距离称为“曼哈顿距离”

![ml-6-2](https://s2.ax1x.com/2020/01/07/lcydVe.md.png)
* 欧拉距离和曼哈顿距离在一定程度上具有一致性
![ml-6-3](https://s2.ax1x.com/2020/01/07/lcys2t.png)
* 最上面是欧拉距离，中间是曼哈顿距离，做归纳得到最下面的公式 -> 明可夫斯基距离
* 根据明可夫斯基距离，我们可以获得了一个新的超参数，就是p
* 我们可以求一下在当前问题中，最优的明可夫斯基距离的p
```python
best_score = 0.0
best_k = -1
best_p = -1

for k in range(1, 11):
    for p in range(1, 6):
        # 这时候要指定权重为距离
        # 为默认参数p赋值
        knn_clf = KNeighborsClassifier(n_neighbors=k, weights="distance", p=p)
        knn_clf.fit(X_train, y_train)
        score = knn_clf.score(X_test, y_test)
        if score > best_score:
            best_k = k
            best_p = p
            best_score = score
        
print("best_k =", best_k)
print("best_p =", best_p)
print("best_score =", best_score)
```

### 4. Grid Search
* sklearn封装了一个网格搜索的方式 -> Grid Search
```python
param_grid = [
    {
        'weights': ['uniform'], 
        'n_neighbors': [i for i in range(1, 11)]
    },
    {
        'weights': ['distance'],
        'n_neighbors': [i for i in range(1, 11)], 
        'p': [i for i in range(1, 6)]
    }
]


knn_clf = KNeighborsClassifier()

from sklearn.model_selection import GridSearchCV
# 网格搜索对象
grid_search = GridSearchCV(knn_clf, param_grid)

grid_search.fit(X_train, y_train)

# 最佳分类器对应的参数
grid_search.best_estimator_

# n_jobs 设定几个cpu处理，如果为-1则全部处理
# verbose 设置日志级别
grid_search = GridSearchCV(knn_clf, param_grid, n_jobs=-1, verbose=2)
grid_search.fit(X_train, y_train)

```
### 5. 更多距离定义
* 向量空间余弦相似度
* 调整余弦相似度
* 皮尔森相似系数
* Jaacard相似系数


<comment-comment/>