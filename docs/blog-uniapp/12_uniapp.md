# 自定义组件

## 一. 父向子组件传参
### 1. 子组件
1. 接收方法 
	```javascript
	props:{
		name:{
			type:String,
			default:''
		}
	}
	```
2. 使用该参数 -> {{name}}
### 2. 父组件
1. 引入子组件
	```javascript
	import list from ‘@/’
	```
2. 声明子组件
	```JavaScript
	components:{
		list
	}
	```
3. 在组件上声明变量
	```javascript
	<list name = "uni-app"></list>
	```
### 二. 子向父组件传值
### 1. 子组件
```javascript
this.$emit('事件名'，参数)
```
### 2. 父组件
```javascript
<list name = "uni-app" @事件名="新的方法名：aaa"></list>
 // 可在methods中定义对应方法
 methods:{
 	aaa(e){
 		console.log(e);
 	}
 }
```