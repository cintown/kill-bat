# 第三章：React中的组件

## 一. 组件的概念
**示意图：**

![3-1](https://s2.ax1x.com/2020/02/21/3n8CBd.md.png)


## 二. 引入组件
* import from 语法，指定组件对应相对路径
```javascript
import component1 from './Component1'
```

## 三. 定义组件
* 引入react对应组件
* 使用ES6的语法,定义一个Component1的类，继承React.Component
* render函数返回的是组件的HTML样式

```javascript
import React,{ Component } from 'react';
// Component = React.Component;
class Component1 extends React.Component{
    render(){
        return(
            <div>
                hello world
            </div>
        );
    }
}
```


## 四. 导出组件
* 使用export语法将组件导出

```javascript
export default Component1;
```

## 五. ReactDom
* 可以将某一个组件挂载到对应的DOM节点上

```javascript
// 已引入Component1组件
// 将Component1组件挂载到id为'root'的节点上
ReactDOM.render(<Component1 />, document.getElementById('root'));
```

* `<Component1 />`为jsx语法，使用该语法需引入React，否则编译失败
* render函数中的`<div>`标签，也属于jsx语法，同样需引入React
