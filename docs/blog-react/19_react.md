# 第十九章：中间件Redux-Thunk

* Thunk 使得actionCreator可以返回一个函数
* state 接收action对象的同时会执行这个函数

## 一. 中间件
* 中间件指在action和store之间会执行的组件

![16-1](https://s2.ax1x.com/2020/02/26/3UDNl9.md.png)


## 一. 安装
```shell
yarn add redux-thunk
```

## 二. 集成

### 1. redux使用中间件集成thunk
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```

### 2. 同时集成thunk和redux-devtools-extension

```javascript
// store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    reducer,
    enhancer
);

export default store;
```

## 三. 使用
1. 在组件生命周期 `componentDidMount` 函数执行时可发起异步请求（如ajax）
    ```javascript
    componentDidMount(){
        const action = actionFunc;
    }
    ```
2. 可在actionCreator中定义这个函数，以及对应的action
    ```javascript
    export const someAction = (data) => {
        // type 对应的值可在actionTypes.js中获取
        type: "some_action",
        data
    }
    
    export const actionFunc = () => {
        return () => {
            axios.get('/list.json').then((res) => {
                const data = res.data;
                const action = someAction(data);
            })
        }
    }
    ```
2. 在该函数内使用`store.dispatch(action)`
    ```javascript
    export const someAction = (data) => {
        // type 对应的值可在actionTypes.js中获取
        type: "some_action",
        data
    }
    
    export const actionFunc = () => {
        return (dispatch) => {
            axios.get('/list.json').then((res) => {
                const data = res.data;
                const action = someAction(data);
                dispatch(action);
            })
        }
    }
    ```
    
3. 在对应reducer.js中替换state

<comment/>