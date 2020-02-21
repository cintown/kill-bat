# 第七章：组件间传值

## 一. 父组件向子组件传值

## 1. 父组件定义值
* 通过属性传值
    ```javascript
    <TodoItem content={item}/>
    ```

### 2. 子组件获取值
* 获取属性值
    ```javascript
    {this.props.content}
    //也可以这样获取content，是等价的
    const {content} = this.props;
    ```

## 二. 子组件向父组件传值
* 父组件可以向子组件传递属性，同时也可以传递方法
* 传递方法的时候需改变this的作用域，是this指向父组件
    ```javascript
    // 一般来说在父组件传递方法的时候，同时改变this的作用域
    // 父组件：
    <TodoItem 
        content={item}
        deleteItem={this.handleItemDelete,bind(this)}
    />
    ```
* 改变父组件传递过来的属性，调用父组件传递过来的方法，已达到子组件向父组件传值的目的
