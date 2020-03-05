# 第五章：CSS效果

## 一. 投影 box-shadow
![5-1](https://s2.ax1x.com/2020/03/05/37drIs.md.png)
### 1. 参数
1. x方向偏移
2. y方向偏移
3. 模糊区域
4. 扩展区域
5. 颜色和透明度
6. inset 内阴影

### 2. 作用
1. 营造层次感（立体感）
2. 充当没有宽度的边框
3. 特殊效果

## 二. 文本投影 text-shadow
### 1. 参数
1. x方向偏移
2. y方向偏移
3. 扩展区域
4. 颜色和透明度

### 2. 作用
1. 立体感
2. 印刷品质感


## 三. 圆角 border-radius
### 1. 使用
1. 数值 -> 50%为圆形
2. 如果加上边框，就不能用1/2原长度px来计算了，需要加上边框的宽度
3. 指定水平和竖直方向的半径
    ```css
    border-radius: 10px 10px 10px 10px / 20px 20px 20px 20px;
    ```
4. 其他
    * border-top-left-radius: 0;
    * border-top-right-radius: 0;
    * border-bottom-left-radius: 0;
    * border-bottom-left-radius: 0;


### 2. 作用
1. 圆角矩形
2. 圆形
3. 半圆/扇形
4. 其他

## 四. 背景 background
```css
.container{
    width: 400px;
    height: 300px;
    border: 1px solid red;
    background:url(./panda.jpg);
    background-size: contain(不够会补充空白)/cover(超出部分会隐藏);
    background-repeat: no-repeat/repeat-x;
    background-position: center center;
}
```

## 五. 按路径裁剪 clip-path
1. 对容器进行裁剪（容器大小不变）
2. 常见的几何图形
3. 自定义的裁剪路径

### 1. 给出例子代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .container{
            width: 400px;
            height: 300px;
            border: 1px solid red;
            background:url(./panda.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            padding:10px;
            /* clip-path: inset(100px 50px); */
            /* clip-path: circle(50px at 100px 100px); */
            /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%, 10% 10%, 40px 10px); */
            clip-path: url(#clipPath);
            /* background-size: cover; */
            transition:clip-path .4s;
        }
        .container:hover{
            /* clip-path: circle(80px at 100px 100px); */
        }
    </style>
</head>
<body>
    <div class="container">
        你好，我是熊猫
    </div>
    <svg>
        <defs>
            <clipPath id="clipPath">
                <!-- <circle cx="60" cy="60" r="50" fill="#34538b" /> -->
                <polygon stroke="#979797" points="0.4921875 81.2070313 92.640625 81.2070313 121.601562 0.21875 153.648437 81.2070313 247.390625 80.7734375 173.394531 140.496094 200.308594 227.09375 121.601562 172.71875 53.4960937 227.09375 80.859375 140.496094"></polygon>
            </clipPath>
        </defs>
    </svg>
</body>
</html>

```
## 六. 3D变化 3D-transform

### 1. 2D变换
![5-2](https://s2.ax1x.com/2020/03/05/37ynkF.md.png)
1. translate 位移
2. scale 拉伸
3. skew 斜切
4. rotate 旋转

### 2. 3D变换
```css
.container{
    margin:50px;
    padding: 10px;
    border: 1px solid red;
    width: 200px;
    height: 200px;
    position: relative;
    perspective: 500px;
    /* transform-style: preserve-3d; */
    /* transform: translateZ(-100px); */
    /* transition:transform .4s; */
}
.container{
    /* transform: translateZ(-100px) rotateX(90deg) rotateY(90deg); */
}
```



<comment/>