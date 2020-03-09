#　flex 布局

## 一. 概念 
1. flexible box 弹性盒状布局
2. 容器控制内部元素的布局定位
3. CSS3引入的新布局模型
4. 伸缩元素，自由填充，自适应

## 二. 优势
1. 可在不同方向排列元素
2. 控制元素排序的方向
3. 控制元素的对齐方式
4. 控制元素之间等距

## 三. 常用术语
1. flex container: flex 容器
2. flex item: flex项目（元素）
3. flex direction: 布局方向

## 四. 布局模型
### 1. 水平
![100-1](https://s2.ax1x.com/2020/03/06/3bH7VS.md.png)

### 2. 垂直
![100-2](https://s2.ax1x.com/2020/03/06/3bHzrV.md.png)

## 五. 布局属性
### 1. flex-direction
> 设置元素排列方向
1. row
2. row-reverse
3. column
4. column-reverse

#### 1.1 举例
```html
<template>
	<view class = "container">

	</view>
</template>

<style>
	.container{
		<!-- 定义flex容器 -->
		display: flex;
		<!-- 定义布局方向 -->
		flex-direction: row;
	}
</style>
```

### 2. flex-warp 
> 使容器内的元素换行

1. nowarp -> 不换行
2. warp -> 超过一定宽度换行
3. warp-reverse -> 逆向（从下往上）换行

### 3. justify-content
> 设置元素在主轴上的对其方式
1. flex-start -> 左（上）对齐
2. flex-end -> 右（下）对齐
3. center -> 居中对齐
4. space-between -> 两端对其，元素之间平均等分剩余空白间隙部分，空白会均匀的填充到flex成员之间
5. space-around -> 两边流出空隙，空隙与元素之间的距离为1:2

### 4. align-items
> 设置元素在交叉轴上的对齐方式
1. flex-start
2. flex-end
3. center
4. baseline -> 文字基准线
5. stretch(默认) -> 拉伸

### 5. align-content
> 设置轴线的对齐方式（轴线当做元素）
1. flex-start
2. flex-end
3. center
4. baseline
5. stretch(默认)
6. space-between
7. space-around

## 六. 成员属性

### 1. order
> 用于设置flex容器内部的每个元素的排列顺序，默认是0，数值越小排在前面

### 2. flex-grow
> 控制元素放大比例，默认是0。-> 权重

### 3. flex-shrink
> 控制元素缩小比例，默认为1 -> 0为不缩放

### 4. flex-basis
> 设置元素固定或自动空间的占比 -> 可自定义设置缩放大小

### 5. align-self
> 重写align-items父属性
1. flex-start
2. flex-end
3. center
4. baseline -> 文字基准线
5. stretch -> 拉伸
6. auto(默认) -> 继承父元素的align-items属性
<comment/>