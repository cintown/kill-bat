# 第四章：小程序事件

## 一. 什么是事件
* 事件是视图层到逻辑层的通讯方式
* 事件可以将用户的行为反馈到逻辑层进行处理
* 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数
* 事件对象可以携带额外信息，如 id, dataset, touches

## 二. 使用方式
### 1. 在组件中绑定一个事件处理函数
```html
<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>
```
### 2. 在相应的Page定义中写上相应的事件处理函数，参数是event
```js
Page({
  tapName: function(event) {
    console.log(event)
  }
})
```
**输出：**

```json
{
  "type":"tap",
  "timeStamp":895,
  "target": {
    "id": "tapTest",
    "dataset":  {
      "hi":"WeChat"
    }
  },
  "currentTarget":  {
    "id": "tapTest",
    "dataset": {
      "hi":"WeChat"
    }
  },
  "detail": {
    "x":53,
    "y":14
  },
  "touches":[{
    "identifier":0,
    "pageX":53,
    "pageY":14,
    "clientX":53,
    "clientY":14
  }],
  "changedTouches":[{
    "identifier":0,
    "pageX":53,
    "pageY":14,
    "clientX":53,
    "clientY":14
  }]
}
```

## 三. 使用WXS函数响应事件
从基础库版本2.4.4开始，支持使用WXS函数绑定事件，WXS函数接受2个参数，
第一个是`event`，在原有的`event`的基础上加了`event.instance`对象，
第二个参数是`ownerInstance`，和`event.instance`一样是一个`ComponentDescriptor`对象。
具体使用如下：
* 在组件中绑定和注册事件处理的WXS函数
```html
<wxs module="wxs" src="./test.wxs"></wxs>
<view id="tapTest" data-hi="WeChat" bindtap="{{wxs.tapName}}"> Click me! </view>
**注：绑定的WXS函数必须用{{}}括起来**
```
* test.wxs文件实现tapName函数
```js
function tapName(event, ownerInstance) {
  console.log('tap wechat', JSON.stringify(event))
}
module.exports = {
  tapName: tapName
}
```
`ownerInstance`包含了一些方法，可以设置组件的样式和class，具体包含的方法以及为什么要用WXS函数响应事件，[传送门](https://developers.weixin.qq.com/miniprogram/dev/framework/view/interactive-animation.html)


## 四. 事件分类
### 1. 冒泡事件
当一个组件上的事件被触发后，该事件会向父节点传递


类型|触发条件|最低版本
:--:|:--:|:--:
touchstart|手指触摸动作开始	
touchmove|手指触摸后移动	
touchcancel|手指触摸动作被打断，如来电提醒，弹窗	
touchend|手指触摸动作结束	
tap|手指触摸后马上离开	
longpress|手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发|1.5.0
longtap|手指触摸后，超过350ms再离开（推荐使用longpress事件代替）	
transitionend|会在 WXSS transition 或 wx.createAnimation 动画结束后触发	
animationstart|会在一个 WXSS animation 动画开始时触发	
animationiteration|会在一个 WXSS animation 一次迭代结束时触发	
animationend|会在一个 WXSS animation 动画完成时触发	
touchforcechange|在支持 3D Touch 的 iPhone 设备，重按时会触发	

### 2. 非冒泡事件
当一个组件上的事件被触发后，该事件不会向父节点传递
<comment-comment/>
<comment/>
