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
**通用的绑定函数： **
```javascript
function bindEvent(elem, type, fn){
    elem.addEventListener(type, fn)
}
    
const btn1 = document.getElementById('btn1')
bindEvent(btn1,'click',event => {
    console.log(event.target) // 获取触发的元素
    event.preventDefault // 组织默认行为
    alert('clicked')
})
```
### 3.2 事件冒泡

**比如说我们的DOM结构是这样的:**

![4-4](https://s2.ax1x.com/2020/01/29/1MWPDx.png)

* 事件冒泡说的是，如点击div2，div2接收到事件通知，同时会依据DOM树向上传递（冒泡），所以在之后body组件也能得到通知

* 我们实现一个功能，目的是：点击p1显示激活，点击其他p标签显示取消

```javascript
const p1 = document.getElementById('p1')
bindEvent(p1,'clicked',event => {
    event.stopPropagation() // 阻止冒泡
    console.log('激活')
})

const body = document.body
bindEvent(body, 'clicked', event =>{
    console.log('取消')
    console.log(event.target)
})
```

### 3.3 事件代理
* 所谓事件代理，就是由于可能是瀑布模式，我们很难去确认具体是哪个标签被点击了，所以我们监听这些标签的父标签。
当标签被点击了，事件会冒泡到父标签，这时我们通过一些判断获取到被点击的标签，再做处一些事件
 
**比如说我们的DOM结构是这样的:**

![4-5](https://s2.ax1x.com/2020/01/29/1MhTvd.png)

* 我们实现一个功能，目的是：组织默认跳转，显示点击a标签对应的标签名称

```javascript
const div1= document.getElementById('div1')

div1.addEventListener('click',event =>{
    const target = event.target
    if (target.nodeName === 'A'){
        console.log(target.innerHTML)
    }
})  
```

**优化：**

```javascript
function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector
        selector = null
    }
    
    elem.addEventListener(type,event => {
        const target = event.target
        
        if(selector){
            // 代理绑定
            if(target.matches(selector)){
                fn.call(target,event)
            }
        }else{
            // 事件绑定
            fn.call(target,event)
        }
    })
}


// 普通绑定
const btn1 = document.getElementById('btn1')
// bindEvent(btn1,'click',event => { // 箭头函数的this是指向上级作用域的，上级作用域是window，所以取不到，改为function可拿到call函数传入的target
//     console.log(event.target) // 获取触发的元素
//     event.preventDefault // 组织默认行为
//     alert(this.innerHTML)
// })

// 代理绑定
bindEvent(btn1,'click','a',function(event){
    event.preventDefault()
    alert(this.innerHTML)
})

```

## 四. ajax

### 4.1 XMLHttpRequest
#### 4.1.1 手写ajax请求
**GET请求：**
```javascript
const xhr = new XMLHttpRequest()
xhr.open('GET','json地址',false)// false 表示同步请求
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            alert(JSON.parse(xhr.responseText))
        }else{
            console.log('其他情况')
        }
    }
}

xhr.send(null)
```

**POST请求：**
```javascript
const xhr = new XMLHttpRequest()
xhr.open('POST','/login',true)// true 表示异步请求
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            alert(JSON.parse(xhr.responseText))
        }else{
            console.log('其他情况')
        }
    }
}

const postData = {
    userName : 'zhangsan',
    password : 'xxxx'
}
xhr.send(JSON.stringify(postData))
```

![4-6](https://s2.ax1x.com/2020/01/29/1MoJiV.md.png)

![4-7](https://s2.ax1x.com/2020/01/29/1MoDd1.md.png)

### 4.2 同源策略
* ajax请求时，浏览器要求当前网页和server必须同源（安全）

* 同源：协议、域名和端口，三者必须一致

* 前端：http://a.com:8080/ ; server: https://b.com/api/xxx -> 协议、域名和端口均不同，属于非同源

* 加载图片、css和js可无视同源策略
> * <img src="跨域的图片地址">
> * <link href="跨域的css地址">
> * <script src="跨域的js地址"></script>

* <img/> 可用于统计打点，可使用第三方统计服务
* <link/> <script> 可使用CDN，CDN一般都是外域
* <script> 可实现JSONP

### 4.3 跨域
* 所有的跨域，都必须经过server端允许和配合

* 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号

#### 4.3.1 JSONP
* <script> 标签可以跨域

* 服务端可以拼接任意数据返回

* 所以，只要服务端愿意返回，<script>就可以获得跨域的数据

**举例：**
![4-8](https://s2.ax1x.com/2020/01/29/1MO7He.md.png)

**jQuery实现JSONP**

![4-9](https://s2.ax1x.com/2020/01/29/1MOvgP.md.png)

#### 4.3.2 CORS
* 服务器设置 http header

![4-10](https://s2.ax1x.com/2020/01/29/1MX05d.md.png)

## 五. 存储

### 5.1 cookie
* 本身用于浏览器和server通讯

* 被“借用”到本地存储

```javascript
document.cookie = 'a=100'
document.cookie = 'b=200'

document.cookie // a=100;b=200 (以追加的形式)
```

* 储存大小，最大4kb

* http请求时需要发送到服务端，增加请求数量

### 5.2 html5存储
localStorage 和 sessionStorage

1. HTML5专门为存储而设计，最大可存5M

2. API简单易用 setItem getItem

3. 不会随着http请求被发送出去

4. localStorage数据会永久存储，除非代码或手动删除，一般使用

5. sessionStorage数据只存在于当前会话，浏览器关闭则清空 


```javascript
localStorage.setItem('a',100)
localStorage.getItem('a') // "100" 强制类型转换为字符串

sessionStorage.setItem('b',200)
sessionStorage.getItem('b') // "200"
```

<comment/>
