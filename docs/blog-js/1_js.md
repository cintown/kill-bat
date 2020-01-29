# 第一章：原型和原型链

## 一. class和继承
**举个例子：**
```javascript
// 声明一个js父类
class People{
    // 构造方法
    constructor(name){
        this.name = name 
    }
    
    // 声明方法
    eat(){
        console.log(`${this.name} eat sth.`)
    }
}

// 声明一个子类
class Student extends People{
    constructor(name,number) {
     super(name)
     this.number = number
    }
    
    // 子类方法
    sayHi(){
        console.log(`姓名 ${this.name}, 学号 ${this.number}`)
    }
}

// 声明另一个子类
class Teacher extends People{
    constructor(name,major) {
     super(name)
     this.major = major
    }
    
    teach(){
        console.log(`${name} 老师教 ${major} 专业`)
    }
}


// 实例化对象
const xialuo = new Student('夏洛',100)
console.log(xialuo.name)
console.log(xialuo.number)
xailuo.sayHi()

const wanglaoshi = new Teacher('王','语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.teach()

```

## 二. 原型

```javascript
xialuo instanceof Student // true
xialuo instanceof People // true
xialuo instanceof Object // true

[] instanceof Array // true
[] instanceof Object // true

{} instanceof Object //true 

// class实际上是函数，可见是语法糖
typeof People // 'function'
typeof Student // 'function'

// 隐式原型
xialuo.__proto__
// 显示原型
Student.prototype

// 指向同一块物理地址
xialuo.__proto__ === Student.prototype

```
### 2.1 原型图
![1-1](https://s2.ax1x.com/2020/01/27/1nDgfK.md.png)

### 2.2 原型关系
* 每个class都有显示原型prototype
* 每个实例都有隐式原型__proto__
* 实例的__proto__指向对应class的prototype

### 2.3 基于原型的执行规则

* 获取属性和方法时
* 现在自身的属性和方法寻找
* 如果找不到则自动去__proto__中寻找

## 三. 原型链
```javascript
People.prototype === Student.prototype.__proto__ //ture
```
### 3.1 原型链图
![1-3](https://s2.ax1x.com/2020/01/27/1nrW40.md.png)

<comment/>