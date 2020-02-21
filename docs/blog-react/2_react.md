# 第二章：工程目录文件介绍

## 一. 工程目录预览

![2-1](https://s2.ax1x.com/2020/02/21/3n8KBj.th.png)

## 二. 文件介绍
### 1. yarn.lock
* 项目依赖的安装包及其版本号

### 2. package.json
* node的包文件
* 项目描述
* 第三方依赖的包
* script指令

### 3. /node_modules
* 依赖的第三方的包文件

### 4. /public

#### 4.1 favicon.ico
* 标签栏图标

#### 4.2 index.html
* 项目的html文件

#### 4.3 manifest.json
* 移动端配置文件（类似于原生安卓的AndroidManifest文件）

### 5. /src
* 项目源代码

#### 5.1 index.js
* 整个程序运行的入口文件
* registerServiceWorker -> ServiceWorker -> PWA -> 支持https协议的服务器上，保存浏览的网页，即使断网也可以显示该网页

#### 5.2 App.js
* 被index.js文件引入

#### 5.3 App.text.js
* 自动化的测试文件




