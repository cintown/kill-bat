# 第八章：代码优化

## 一. 函数声明

* 函数声明建议放在构造函数中
* this作用域指向更改，也建议放在构造函数中。保证函数绑定只会执行一次，也会节省子组件的无畏渲染

## 二. 变量声明

* 父组件向子组件传值，可使用
    ```javascript
    const {content,idex,...} = this.props;
    ```

## 三. JSX中抽离逻辑
* JSX中不应有太多逻辑，可以抽象一个方法，并将内容返回。同时在JSX中引入

## 四. setState
* 新版React中建议使用函数形式
    ```javascript
    // setState传入函数，代表是异步的，这是需要将e.target.value值暂存一下
    const value = e.target.value;
    this.setState(() => {
        return(
            inputValue : value
        )
    })
    // 或
    this.setState(() => {inputValue : e.target.value})
    ```
* setState接收一个参数prevState -> 代表修改数据之前的参数是什么 -> 等价于this.state
* prevState可避免不小心修改了state的状态

## 五. 其他
* return返回一个对象 -> 对象是()
* 箭头函数指向一个函数 -> 函数是{}


<comment/>
