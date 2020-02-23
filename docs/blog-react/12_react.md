# 第十二章：React 中的虚拟Dom

* 虚拟DOM就是一个js对象，用它来描述一个真实的DOM

## 一. 虚拟DOM动态改变页面的流程
`JSX -> reactElement() -> JS对象（虚拟DOM） -> DOM`

1. 具有 state 数据
2. 具有 JSX 模板
3. 数据 + 模板 结合，生成虚拟DOM
    ```javascript
    ['div',{id: 'abc'},['span',{},'hello world']]
    ```
4. 用虚拟DOM的结构生成真实的 DOM ，显示
    ```javascript
    <div id='abc'><span>hello world</span></div>
    ```
5. state 发生了变化，hello world -> bye bye
6. 数据 + 模板 生成新的虚拟DOM
    ```javascript
    ['div',{id: 'abc'},['span',{},'bye bye']]
    ```
7. 比较原始虚拟DOM和新生成的虚拟DOM的区别，找到区别是span中的内容
8. 直接操作DOM，改变span中的内容

## 二. 优势
1. 从DOM比对和渲染，优化到对JS对象的比对，极大的提升了性能
2. 虚拟DOM使得跨端应用得以实现。 -> React Native

## 三. Diff算法

## 1. 异步setState
![12-1](https://s2.ax1x.com/2020/02/22/3QDhi6.md.png)

* 不管是state还是props发生改变，state是本组件的数据发生改变，props是父组件的state发生改变，终归是在执行setState函数时，页面发生了改变
* setState 是异步操作的，并且能将短时间内多次setState结合成一次，减少虚拟DOM比对的次数

## 2. 虚拟DOM同层比对
![12-2](https://s2.ax1x.com/2020/02/22/3Qsph6.md.png)

* 如果比对某一层不一致，则直接替换以下层级的文件

## 3. key值
![12-3](https://s2.ax1x.com/2020/02/22/3Qsljg.md.png)
* 虚拟DOM比对的时候，拥有key值（key值前后相同）能极大提升比对的性能
* 因此也要保证key值的稳定。尽量不要用index作为key值


<comment/>