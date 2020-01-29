# 第四章：JS Web API


## 一. DOM -> Document Object Model
### 1.1 DOM的本质
1. xml

![4-1](https://s2.ax1x.com/2020/01/27/1uJYyq.md.png)

2. html

![4-2](https://s2.ax1x.com/2020/01/27/1uJdTU.md.png)

简单来说，DOM是从HTML语言解析出来的树状结构

![4-3](https://s2.ax1x.com/2020/01/27/1uJ661.md.png)

### 1.2 DOM节点操作

#### 1.2.1 获取DOM节点

```javascript
const div1 = document.getElementById('div1') // 获得元素

const divList = document.getElementsByTagName('div') // 获得集合

const containerList = document.getElementsByClassName('.container') // 获得集合

const pList = document.querySelectorAll('p') // 获得集合
```
#### 1.2.2 DOM节点的property
* 获取节点js变量的属性，并进行操作

```javascript
const pList = document.querySelectorAll('p')
const p = pList[0]

console.log(p.style.width) // 获取样式

p.style.width = '100px' // 修改样式

console.log(p.className) // 获取 class

p.className = 'p1' // 修改class

// 获取nodeName和nodeType
console.log(p.nodeName) // P
console.log(p.nodeType) // 1
```
#### 1.2.3 DOM节点的attribute
* attribute是真正能作用到DOM结构里面去的
```javascript
const pList = document.querySelectorAll('p')
const p = pList[0]

p.getAttribute('data-name')
p.setAttribute('data-name','imooc')
// <p data-name="imooc" > 一段文字 1</p>

p.getAttribute('style')
p.setAttribute('style','font-size:30px;')
```

#### 1.2.4 总结property和attribute
* property: 修改对象属性，不会体现到html结构中
* attribute: 修改HTML属性，会改变HTML结构
* 两者都有可能引起DOM重新渲染

### 1.3 DOM结构操作
* 获取容器

```javascript
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
```
#### 1.3.1 新建节点
```javascript
const newP = document.createElement('p')
newP.innerHTML = 'this is newP'
// 插入节点
div1.appendChild(newP)
```

#### 1.3.2 移动节点
* p1是div1中的元素，将他移动到div2

```javascript
const p1 = document.getElementById('p1')
div2.appendChild(p1)
```

#### 1.3.3 获取父元素
```javascript
p1.parentNode // div2
```

#### 1.3.4 获取子元素
```javascript
const div1ChildNodes = div1.childNodes
// 获得的元素除了DOM标签以外，还有text标签。正常的DOM标签的nodeType为1，我们可以由此进行过滤

// slice:Returns a section of an array
const div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child => {
    if (child.nodeType === 1){
        return true
    }else {
        return false
    }
})

```

#### 1.3.5 删除元素
```javascript
div1.removeChild(div1ChildNodesP[0]) //删除第一个p标签
```

### 1.3 DOM性能

* DOM操作非常“昂贵”，避免频繁的DOM操作

**优化性能可以采用以下方式**

#### 1.3.1 对DOM查询做缓存

**举例：**

* 不缓存DOM查询结果

```javascript
for(let i=0; i<document.getElementsByTagName('p').length; i++){
    // 每次循环，都会计算length，频繁进行DOM操作
}
```

* 缓存DOM查询结果

```javascript
const pList = document.getElementsByTagName('p')
const length = pList.length

for(let i=0;i<length;i++){
    // 缓存length，只进行一次DOM查询
}
```

#### 1.3.2 将频繁的操作改为一次性的操作
* 批量将li插入到id为list的ul中
```javascript
const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment()

// 执行插入 
for(let i=0;i<10;i++){
    const li = document.createElement('li')
    li.innerHTML = `list item ${i}`
    frag.appendChild(li)
}

// 再插入到DOM树中
listNode.appendChild(frag)
```

## 二. BOM -> Browser Object Model

* 常见API

### 2.1 navigator
```javascript
const ua = navigator.userAgent
 // 可用该方法查询有对应的浏览器标识，但是目前厂商为了适配更多的浏览器所以给了很多标识导致不能单单靠这一个条件进行判断
```

### 2.2 screen
```javascript
// 屏幕信息
screen.width
screen.height
```

### 2.3 location 
```javascript
// 目标URL：https://coding.imooc.com/lesson/115.html?a=100&b=200#mid=30378

// 获取当前URl
location.herf

// 获取协议 -> Http: / Https:
location.protocol

// /lesson/115.html
location.pathname

// 查询参数 ?a=100&b=200
location.search

// coding.imooc.com
location.host

// mid=30378
location.hash
``` 

### 2.4 history

```javascript
// 前进
history.forward()
// 后退
history.back()
```

## 三. 事件

### 3.1 事件绑定
```javascript
const btn = document.getElementById('btn1')
btn.addEventListener('click', event => {
    console.log('clicked')
})
```

### 3.2 事件冒泡

### 3.3 事件代理

<comment/>
