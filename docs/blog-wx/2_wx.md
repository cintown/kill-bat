# 第二章：WXSS样式

[`官方文档传送门`](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)

## 一. 定义
WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式，WXSS 用来决定 WXML 的组件应该怎么显示

## 二. 尺寸单位
微信建议使用 rpx（responsive pixel），可以根据屏幕宽度进行自适应

## 三. 样式导入
使用@import语句可以导入外联样式表，@import后跟需要导入的外联样式表的相对路径，用;表示语句结束

```css
/** common.wxss **/
.small-p {
  padding:5px;
}
```
```css
/** app.wxss **/
@import "common.wxss";
.middle-p {
  padding:15px;
}
```

## 四. 内联样式
框架组件上支持使用 style、class 属性来控制组件的样式

* style：静态的样式统一写到 class 中。style 接收动态的样式，在运行时会进行解析，请尽量避免将静态的样式写进 style 中，以免影响渲染速度
```html
<view style="color:{{color}};" />
```

* class：用于指定样式规则，其属性值是样式规则中类选择器名(样式类名)的集合，样式类名不需要带上.，样式类名之间用空格分隔
```html
<view class="normal_view" />
```

## 五. 选择器
![2-1](https://s2.ax1x.com/2020/01/15/lXJLxU.md.png)


<comment/>
