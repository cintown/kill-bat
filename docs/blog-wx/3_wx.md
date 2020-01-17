# 第三章：生命周期

## 一. 小程序生命周期
### 1. onLaunch
小程序启动之后，在 app.js 定义的 App 实例的 onLaunch 回调会被执行

### 2. onShow
小程序展现在前台，第一次会随着onLaunch一起触发

### 3. onHide
小程序隐藏到后台

### 4. onError
错误监听函数

### 5. 其他

## 二. 页面生命周期

### 1. onLoad
页面加载
* 一个页面只会调用一次，可以在onLoad中获取打开当前页面所调用的query参数

### 2. onShow
页面显示
* 每次打开页面都会调用一次

### 3. onReady
页面初次渲染完成
* 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
* 对页面的设置，如 `wx.setNavigationBarTitle` 请在 `onReady`之后设置

### 4. onHide
页面隐藏
* 当 `navigateTo` 或底部 tab 切换时调用

### 5. onUnload
页面卸载
* 当 `redirectTo` 或 `navigateBack` 的时候调用

### 6. ...
<comment-comment/>
<comment/>
