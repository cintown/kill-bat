# k近邻算法 kNN

## 一. 概念

![ml_4_1](https://s2.ax1x.com/2020/01/06/lyKUne.md.png)

* 最相似的k个样本中，那个类别最多，我们就认为这个样本最有可能属于哪个类别

* 我们描述两个样本的相似性是根据在特征空间中的距离决定的

## 二. 运用
### 1. 创建简单测试用例
```python
# 创建
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

plt.scatter(X_train[y_train==0,0], X_train[y_train==0,1], color='g')
plt.scatter(X_train[y_train==1,0], X_train[y_train==1,1], color='r')
plt.show()
```
* 用图像显示
![ml-4-2](https://s2.ax1x.com/2020/01/06/lyKDht.png)

### 2. 预测
```python
x = np.array([8.093607318, 3.365731514])

plt.scatter(X_train[y_train==0,0], X_train[y_train==0,1], color='g')
plt.scatter(X_train[y_train==1,0], X_train[y_train==1,1], color='r')
plt.scatter(x[0], x[1], color='b')
plt.show()
```
* 用图像显示
![ml-4-3](https://s2.ax1x.com/2020/01/06/lyK4Nn.png)

### 3. kNN的过程
```python
from math import sqrt
distances = []
for x_train in X_train:
    # 这里用到欧拉公式计算两点间的距离
    d = sqrt(np.sum((x_train - x)**2))
    distances.append(d)
    
或

distances = [sqrt(np.sum((x_train - x)**2))
             for x_train in X_train]
    
    
> distances:[
 4.812566907609877,
 5.229270827235305,
 6.749798999160064,
 4.6986266144110695,
 5.83460014556857,
 1.4900114024329525,
 2.354574897431513,
 1.3761132675144652,
 0.3064319992975,
 2.5786840957478887]
```
![ml-4-4](https://s2.ax1x.com/2020/01/06/lyKOHJ.md.png)

```python
# argsort对一个数组进行排序，返回的是数组结果的索引
# 如结果第一个“8”，代表的就是“0.3064319992975”这个点
nearest = np.argsort(distances)
> array([8, 7, 5, 6, 9, 3, 0, 1, 4, 2])

#设置k值
k = 6

# 拿到最近的前k个点结果
topK_y = [y_train[neighbor] for neighbor in nearest[:k]]
> [1, 1, 1, 1, 1, 0]


from collections import Counter
# 将数组中的元素和元素出现的频次做统计
votes = Counter(topK_y)
> Counter({1: 5, 0: 1})

# 找出票数最多的1个元素
votes.most_common(1)
> [(1, 5)]

predict_y = votes.most_common(1)[0][0]
> 1
```


<comment-comment/>