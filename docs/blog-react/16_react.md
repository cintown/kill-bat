# 第十六章：Redux

## 一. 简述
![16-1](https://s2.ax1x.com/2020/02/23/3lIX1H.md.png)


## 二. 工作流程

### 1. 图示
![16-2](https://s2.ax1x.com/2020/02/23/3loHrn.md.png)

### 2. 象形

1. React Components -> 一个人想要找一本书
2. Action Creators -> “我需要一本XX样的书”
3. Store -> 图书馆管理员
4. Reducers -> 管理员的记录手册

#### 2.1 大致流程

* 一个人想要去图书馆找一本书
* “我需要一本XX样的书”这句询问相当于一个Action
* 被询问对象是Store（图书馆管理员）
* 图书馆管理员需要查询自己的记录手册，才能确定图书的位置
* 管理员找到图书后告诉这个人具体的图书信息

### 3. 工作流程
1. 组件内容发生变化
2. 变化对应函数中定义action -> 指明action的type，以及变动的元素的value
3. 此时store接收到组件变动信息，同时将state和action传给reducer
4. reducer先判断action.type，进入对应条件代码块
5. 此时可以用深拷贝一个state的副本，使state对应副本的相应属性元素值发生改变
6. reducer返回state副本给store
7. 此时store中的state已有最新的数据
8. 在组件的构造方法中，订阅store -> 声明一个相应的函数 -> 在该函数中将store的state全部赋值给组件this.state
6. 组件刷新render，界面得到更新

## 三. 安装Redux
```shell
yarn add redux
```

## 四. actionTypes.js
* 给项目解耦，将action.types对应的字符串抽离到这个文件上来

## 五. actionCreator.js
* 统一创建action


## 六. 注意
1. store是唯一的
2. 只有store能够改变自己的内容
3. Reducer 必须是纯函数
    > 纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
