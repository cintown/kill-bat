# 第二十三章：combineReducers

* 拆分reducer.js

## 一. 拆分


## 二. 总的reducer引入
```javascript
import { combineReducers } from 'redux';
import headerReducer from '对应子目录的reducer';

const reducer =  combineReducers({
    header: headerReducer
})

export default reducer;
```

## 三. 组件取store中state的数据

```javascript
const mapStateToProps = (state) => {
    return {
        inputValue: state.header.inputValue
    }
}
```

## 四. 优化
### 1. 子组件的文件夹对应index.js文件
1. 引入对应子组件的reducer并暴露
2. 可缩短总的reducer引入的名称


<comment/>
