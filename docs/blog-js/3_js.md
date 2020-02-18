# 第三章：同步和异步

## 一. promise 
### 1.1 callback hell
promise解决了Callbacks hell的问题，先了解一下回调地狱
```javascript
// 获取第一份数据
$.get(url1,(data1) => {
    console.log(data1)
    
    // 获取第二份数据
    $.get(url2,(data2) =>{
        console.log(data2)
        
        // 获取第三份数据
        $.get(url3,(data3) => {
            console.log(data3)
            
            // 还可能获取更多的数据。。。
            
        })
    })
})
```
直观看上去很复杂，如果工程很庞大的话很容易造成编程的错误

### 1.2 Promise对象

每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数

```javascript
getData(url1).then(data1 => {
    console.log(data1)
    return getData(url2)
}).then(data2 => {
    console.log(data2)
    return getData(url3)
}).then(data3 => {
    console.log(data3)
}).catch(err => console.error(err))


function getData(url) {
    return new Promise((resole,reject) => { // 获取promise实例
        $.ajax({
            url,
            sucess(data){
                resole(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}
```

将callback的嵌套形式转换为链式操作的形式

### 1.3 应用场景
* 网络请求，如ajax图片加载
* 定时任务，如setTimeOut

<comment/>