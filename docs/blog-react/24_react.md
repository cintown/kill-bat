# 第二十四章：immutable.js

## 一. 安装
```shell
yarn add immutable
```

## 二. 引入

```javascript
import {fromJS} from 'immutable';
```

## 三. 使用
### 1. 将reducer中的state数据设置为immutable
```javascript
const defaultState = fromJS({
    focused: true
});
```

### 2. 在组件中调用state的值使用immutable的get方法
```javascript
const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}
```

### 3. 在reducer中set属性的值
* immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
```javascript
return state.set('focused',true)
```

## 三. redux-immutable
* state不是immutable对象，而state下的header是immutable对象
* redux-immutable 统一为immutable对象
### 1. 安装
```shell
yarn add redux-immutable
```

### 2. combineReducer 改为从redux-immutable中获取
```javascript
import { combineReducer } from 'redux-immutable';
```


### 3. 组件中获得state中的值
```javascript
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}
```
