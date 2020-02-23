# 第十五章：CSS动画

## 一. 过渡动画效果
* opacity -> 1 为显示，0 为隐藏

* transaction -> 过渡效果 -> all 1s ease-in

## 二. 动画效果
* animation -> 动画效果 -> 可使用自定义的动画 -> 最后一个参数填写forwards可保留最后一帧执行的结果

* @keyframes
    ```css
    .hide {
        animation : hide-item 2s ease-in forwards;
    }
    
    @keyframes hide-item {
        0% {
            opacity: 1;
            color: red;
        }
        50% {
            opacity: 0.5;
            color: green;
        }
        100% {
            opacity: 0;
            color: blue;
        }
    }
    ```

## 三. react-transition-group
* react动画的第三方模块

### 1. 引入组件
* 安装
    ```shell
    yarn add react-transition-group
    ```
* 引入
    ```javascript
    import { CSSTransition } from 'react-transition-group';
    ```

### 2. 使用

* 使用CSSTransition组件包裹标签
    ```javascript
    <CSSTransition
        // 监听数据变化
        in={ this.state.show }
        // 过渡时间
        timeout={1000}
    >
        <div>hello</div>
    </CSSTransition>
    ```
* 设置css样式
    ```javascript
    <CSSTransition
        classNames='fade'
    >
    ```
    ```css
    fade-钩子css样式
    ```
    
* 隐藏时组件消失 -> unmountOnExit

* 钩子函数
    ```javascript
    // 举例，进入完成后
    <CSSTransition
        onEntered={(el) => {el.style.color='blue'}}
    >
    // el 指被包裹的div标签元素
    ```

* 页面进入时就执行动画效果 -> appear={true}

### 3. TransitionGroup
* 引入TransitionGroup组件
* TransitionGroup是说一组动画，需要包裹在动画组件的最外层
* 并且配合CSSTransition（在组内每一项标签使用）使用
