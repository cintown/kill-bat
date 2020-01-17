# 第一章：小程序目录结构

## 一. 主目录结构
**图示：**

![1-1](https://s2.ax1x.com/2020/01/15/lX1PTP.png)

### 1. app.js
外部全局主js，可以当做一个父类
### 2. app.json
![1-4](https://s2.ax1x.com/2020/01/15/lXNGUs.png)

当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等

我们简单说一下这个配置各个项的含义:

1. pages字段 —— 用于描述当前小程序所有页面路径，这是为了让微信客户端知道当前你的小程序页面定义在哪个目录。默认第一个页面为`首页`
2. window字段 —— 定义小程序所有页面的顶部背景颜色，文字颜色定义等

其他配置项细节可以参考文档 [小程序的配置 app.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)

<!--**页面结构展示：**

![1-3](https://s2.ax1x.com/2020/01/15/lX3jrd.md.png)-->


### 3. app.wxss
全局主样式，公用

## 二. 页面目录结构

**图示：**

![1-2](https://s2.ax1x.com/2020/01/15/lX1mOs.png)


### 1. index.js
私有的js，相当于子类

### 2. index.json
以json对象形式存在的配置

### 3. index.wxml
元素所渲染的页面

### 4. index.wxss
私有样式
<comment-comment/>
<comment/>
