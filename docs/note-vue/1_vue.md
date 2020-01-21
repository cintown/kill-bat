# The "data" option should be a function that returns a per-instance value in component definitions

## 一. 举例
```javascript
 data: {
    A: false,
    B: true
  }
```
## 二. 原因
一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

## 三. 解决
```javascript
data: function() {
    return {
      seen: true
    };
},
```
