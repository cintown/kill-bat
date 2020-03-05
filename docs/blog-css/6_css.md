# 第六章：CSS动画
## 一. 动画原理
1. 视觉暂留作用
2. 画面逐渐变化
## 二. 动画作用
1. 愉悦感
2. 引起注意
3. 掩饰

## 三. 动画类型
### 1. transition 补间动画
* 两个图形变换之间的动画  
#### 1.2 解决问题
1. 位置-平移 -> left/right/margin/transform
2. 方位-旋转 -> transform
3. 大小-缩放 -> transform
4. 透明度 -> opacity
5. 其他-线性变换 -> transform
#### 1.3 重要属性
1. transition-timing-function
    ![6-1](https://s2.ax1x.com/2020/03/05/377kee.md.png)
#### 1.4 使用
```html
.container{
    width: 100px;
    height: 100px;
    background: red;
    transition: all 1s;
    /* transition-timing-function: ease-in-out; */
    transition-timing-function: cubic-bezier(0.465, -0.460, 0.525, 1.435);
    /* transition-delay: 1s; */
}
```
### 2. keyframe 关键帧动画
* 多关键帧的补间动画
* 与元素状态无关，打开页面即可播放
* 定义更加灵活
#### 2.1 使用
```html
@keyframes run{
    0%{ // from
        width: 100px;
    }
    50%{
        width: 800px;
    }
    100%{ // to
        width: 100px;
    }
}
```
#### 2.2 animation
##### 2.2.1 重要属性
1. animation-fill-mode: forwards; -> 保留最后状态 / backwards -> 保留最初状态
##### 2.2.2 使用
```html
.container{
    width: 100px;
    height: 100px;
    background: red;
    animation: run 1s linear;
    /* animation-direction: reverse; */
    /* animation-fill-mode: forwards; */
    animation-iteration-count: infinite;
    /* animation-play-state: paused; */
}
```

### 3. 逐帧动画
* 中间没有补间的
* 画面与画面之间没有办法计算
* 适用于无法补间计算的动画
* 资源较大
* 使用steps()

#### 3.1 属性
1. steps(1) -> 关键帧之间要有几个画面，不想有补间动画则指定为1

#### 3.1 使用
```html
.container{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background: url(./animal.png) no-repeat;
    animation: run 1s infinite;
    animation-timing-function: steps(1);
}
@keyframes run{
    0%{
        background-position: 0 0;
    }
    12.5%{
        background-position: -100px 0;
    }
    25%{
        background-position: -200px 0;
    }
    37.5%{
        background-position: -300px 0;
    }
    50%{
        background-position: 0 -100px;
    }
    62.5%{
        background-position: -100px -100px;
    }
    75%{
        background-position: -200px -100px;
    }
    87.5%{
        background-position: -300px -100px;
    }
    100%{
        background-position: 0 0;
    }
}
```


<comment/>
