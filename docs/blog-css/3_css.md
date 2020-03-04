# 第三章：非布局样式

## 一. 文字
### 1. 字体
1. 字体族（font-family） 
	* serif(衬线字体，如宋体) 
	* sans-serif(非衬线字体，如黑体) 
	* monospace(等宽字体) 
	* cursive(手写体) 
	* fantasy(花体)
2. 多字体 fallback
3. 网络字体、自定义字体
	```html
	@font-face {
		font-family: "IF";
		src: url("./XXXX.ttf")
	}
	```
4. iconfont

### 2. 行高
1. 行内最高元素的行高决定了linebox的高度
2. inline按照baseline对齐

## 二. 盒子
### 1. 背景
1. 背景颜色
	```css
	background:hsl
	background:rgb
	background:url()
	```
2. 渐变色
	```css
	background:linear-gradient(to right, red, green)
	```
3. 多背景叠加
4. 背景图片和属性（雪碧图）
5. base64和性能优化
6. 多分辨率适配

### 2. 边框 border
1. 线形 -> solid（实线），dotted（点），dashed（虚线）
	```css
	.c3 {
		border-bottom: 20px solid red transparent(透明);
	}
	```

## 三. 页面

### 1. 滚动 overflow

1. 滚动行为和滚动条
	![3-1](https://s2.ax1x.com/2020/03/04/3Iy7rT.th.png)

### 2. 文字折行
1. overflow-warp(word-warp)通用换行控制 -> 是否保留单词
2. word-break 针对多字节文字 -> 中文橘子也是单词
3. white-space 空白处是否断行

## 四. 装饰
1. 字重(粗体) -> font-weight -> bold(粗体)/bolder（更粗）
2. 斜体 -> font-style:itatic
3. 下划线 -> text-decoration
4. 指针 -> cursor

## 五.其他
### 1. css hack 在某些浏览器兼容