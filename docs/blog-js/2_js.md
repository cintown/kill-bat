# 第二章：作用域和闭包

## 一. 作用域

![2-1](https://s2.ax1x.com/2020/01/27/1ny8wd.png)

* 全局作用域

* 函数作用域

* 块级作用域
> 块级作用域指if、while等，包含在{}内的区域

## 二. 自由变量

* 一个变量在当前作用域没有定义，但被使用了

* 向上级作用域，一层一层一次寻找，直到找到为止

* 如果到全局作用域都没有找到，则会报错 “xx is not defined”

## 三. 闭包
闭包是作用域应用的特殊情况，有两种表现：

### 3.1 函数作为返回值
```javascript
function create() {
  const a = 100
  return function(){
      console.log(a)
  }
}

const fn = create()
const a = 200
fn()

// 打印结果为 ： 100
```
### 3.2 函数作为参数被传递
```javascript
function print(fn){
    const a = 200
    fn()
}

const a = 100
function fn(){
    console.log(a)
}

print(fn)


// 打印结果为：100
```

### 3.3 闭包总结
所有的自由变量的查找，是在函数定义的地方，向上级作用域查找，而不是在函数执行的地方

### 3.4 this

这里推荐一篇小姐姐的博客，写得很好 -> [传送门](https://juejin.im/post/59bfe84351882531b730bac2#heading-3)<br>

我简单总结一下：
* this 永远指向最后调用它的那个对象
* 如何改变this的指向？
    1. 箭头函数 -> `箭头函数的 this 始终指向函数定义时的 this，而非执行时`
    2. 在函数内部使用 _this = this -> 意思说是先拿到对象的引用，然后再用该引用调用对象的方法。可避免因为作用域问题导致的undefined 
    3. 使用apply、call、bind函数 -> 这三个函数在调用的时候都将对象的引用作为参数传入，从而可以指定调用的对象，即改变this的指向
    
### 3.5 闭包的示例

* 隐藏数据，如当做cache缓存






<comment/>