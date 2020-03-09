# uni-app 基础api

## 一. 获取系统信息
### 1. 作用
* 手机型号
* 屏幕高度
### 2. 使用
```javascript
uni.getSystemInfo({
	success(e){
		console.log(e);
	}
})
```

## 二. 网络请求

uni.request(OBJECT)

<comment/>