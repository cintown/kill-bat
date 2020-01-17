# 第六章：视图层

## 一. 数据绑定

数据绑定使用Mustache语法（双大括号）将变量包起来，**举例：**

```html
<!--wxml-->
<view> {{message}} </view>
```

```js
// page.js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

## 二. 列表渲染
默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`
```html
<!--wxml-->
<view wx:for="{{array}}"> {{item}} </view>
```
```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

## 三. 条件渲染

```html
<!--wxml-->
<view wx:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>
<view wx:elif="{{view == 'APP'}}"> APP </view>
<view wx:else="{{view == 'MINA'}}"> MINA </view>
```
```js
// page.js
Page({
  data: {
    view: 'MINA'
  }
})
```

## 四. 模板

```html
<!--wxml-->
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```
```js
// page.js
Page({
  data: {
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  }
})
```
<comment/>
