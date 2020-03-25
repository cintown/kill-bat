# 第四章：Router 钩子

## 一. routeChangeStart
* 路由即将开始变化
* 接收参数是目标路由地址

## 二. routeChangeComplete
* 路由切换完毕
* 接收参数是目标路由地址

## 三. routeChangeError
* 路有变化错误

## 四. beforeHistoryChange
* h5中的history api
* 接收参数是目标路由地址

## 五. hashChangeStart
* hash -> #
* hash变化的时候只会监听到hash函数
* 接收参数是目标路由地址（带hash）

## 六. hashChangeComplete
* 接收参数是目标路由地址（带hash）
<comment/>