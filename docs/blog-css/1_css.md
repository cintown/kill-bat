# 第一章：HTML

## 一. Head
* 页面相关的资源，以及信息描述

### 1. meta
1. charset　字符集
	```html
	<meta charset="utf-8">
	```
2. viewport 视口
	```html
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
	```
	* width=device-width -> 宽度等于设备宽度
	* initial-scale=1.0 -> 初始缩放为1
	* maximum-scale=1.0 -> 最大缩放为1
	* user-scalable=no -> 用户不能缩放

### 2. title
### 3. style
### 4. link
### 5. script
### 6. base 基础路径
	```html
	<base href="/">
	```

## 二. body
### 1. 区域
1. div
2. section
3. article
4. aside
5. header
6. footer

### 2. 段落
1. p

### 3. 行内元素
1. span
2. em -> 斜体
3. strong -> 粗体

### 4. 表格
1. table
2. thead
3. tbody
4. tr -> 行
5. td -> 列
	```html
	table td[colspan,rowspan]
	```
6. th -> 表头

### 5. 列表
1. ul -> 无序列表
2. ol -> 有序列表
3. li -> 列表条目
4. dl -> 定义列表
5. dt -> 定义标题
6. dd -> 定义内容

### 6. 链接
1. a
	```html
	a[href,target(_blank)]
	```

### 7. 表单元素
1. form
	```html
	form[target,method,enctype]
	```
2. input -> 单选框的name相同，说明是一组，选其一
	```html
	input[type(submit),value]
	```
3. select -> 下拉列表
	```html
	select>option[value]
	```
4. textarea
5. button
	```html
	button[type(botton,submit,reset)]
	```
6. label -> 与表单项关联（扩大选中范围）
	```html
	label[for=“与之关联元素的id”]
	```

## 三. 元素分类

### 1. 按默认样式分
1. 块级 block
	* 方块形状
	* 默认占据一整行，不会给其他元素留出空间
	* div/

2. 行内 inline
	* 不一有规则形状
	* 与其他元素共享一行
	* p/span/em/strong/a

3. inline-block
	* 对内表现block
	* 对外表现inline
	* select/

### 2. 按内容分

![1-1](https://s2.ax1x.com/2020/03/04/3IVLNt.th.png)

## 四. 元素嵌套

* 块级元素可以包含行内元素
* 块级元素不一定能够包含块级元素
* 行内元素一般不能包含块级元素 -> a>div -> a是transparent透明内容模型，在编译的时候会将其去掉

## 五. 去除默认样式
### 1. CSS RESET
[传送门](../blog-react/22_react.md)
### 2. style
```html
<head>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
	</style>
</head>
```
### 3. Normalize.css
* 统一各浏览器的样式

<comment/>