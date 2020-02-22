# 第五章：事件绑定

## 一. 响应式思想
* 不直接操作DOM
* 数据驱动，React自动感知到数据的变化，自动生成DOM

## 二. 定义数据
* React的类都有自己的构造方法 -> contructor(){}
* 构造函数优于其他函数最先被执行
* 接收props参数
* 调用父类构造方法 -> super(props);
* 数据定义在组件的状态（state）里面 -> this.state = {}

## 三. 数据绑定
* 给标签赋值，使标签的value值等于 {this.state.XXX} (对应参数名称)

## 四. 事件绑定
### 1. onChange
* onChange需驼峰式书写
* 定义对应函数，一样需要大括号包裹，可将函数使用bind，使方法中的this作用域发生改变，指向整个组件（TodeList组件）
* 对应的事件可填写一个参数e，e获取的就是事件对象
* e.target 对应事件的DOM节点，可获取对应value -> e.target.value 
* 改变组件state中的数据，使用setState()
    ```javascript
    this.setState({
        inputValue : newValue
    })
    ```
### 2. onClick
* onClick需驼峰式书写

> ES5里面数组有一个map方法，可以通过map方法对数组做一个循环 <br>
> map函数接收两个参数，一个是item（就是对应数据），一个是index（数据对应的序号）

> list:[...this.state.list] -> 展开运算符 <br>
> 将state的list原有数据拿出，生成一个新的数组

* immutable -> state不允许我们做任何改变，需拷贝state对应变量的副本，修改副本，在setState回去
<comment/>
