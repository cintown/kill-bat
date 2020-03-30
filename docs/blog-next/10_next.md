# React Hooks

## 一. 什么是Hooks？
1. `React Hooks` 就是用函数的形式代替原来的继承类的形式
2. 使用预函数的形式管理 `state`
3. `useEffect` 代替常用的声明周期函数

## 二. 常用 Hooks API
### 1. State-Hook 状态管理
#### 1.1 useState
1. 引入useState
    ```jsx harmony
   import React, { useState } from 'react'
    ```
2. 使用
    ```jsx harmony
   // 声明并设置默认值
   const [count, setCount] = useState(0)
   // 两种使用方式
   // 设置常量
   setCount(1)
   // 设置变量，箭头函数可避免闭包陷阱
   setCount(c => c+1)
   ```

#### 1.2 useReducer
1. 引入useReducer
    ```jsx harmony
    import { useReducer } from 'react'
   ```
2. 使用
    ```jsx harmony
   // 声明reducer，接收两个参数state和action
   function countReducer(state,action){
       switch(action.type){
           case 'add':
               return state + 1
           case 'reduce':
               return state - 1
           default:
               return state;
       } 
   }
   
   
   // 声明并传入reducer和初始值
   const [count, dispatchCount] = useReducer(countReducer,0)
    
   // dispatch对应的action
   dispatchCount({ type:'add'})
   
   // 使用count
   {count}
   ```
### 2. Effect-Hook 声明周期
#### 2.1 useEffect
1. 引入
    ```jsx harmony
    import React, { useEffect } from 'react'
   ```
2. 使用
    ```jsx harmony
   // 声明变量
   const [count, setCount] = useState(0)
   
   // 使用
    useEffect(() => {
       console.log('effect invoked')
       return () => console.log('effect deteched')
   },[count])
   ```
3. 分析
    * useEffect 函数接收两个参数，一个对象一个数组
    * 一旦数组中某一个变量的值（依赖）发生变化，useEffect所在函数将会被重新渲染
    * useEffect 函数执行顺序为：先会执行回调函数中的卸载，再会执行方法体中的挂载
#### 2.2 useLayoutEffect
1. 引入
    ```jsx harmony
    import React, { useLayoutEffect } from 'react'
   ```
2. 使用
    ```jsx harmony
    useLayoutEffect(() => {
       console.log('layout effect invoked')
       return () => console.log('layout effect deteched')
   },[count])
   ```
3. 与useEffect的差别
    * useLayoutEffect 的回调函数和方法体都会在useEffect之前执行
    * 原因是，useLayoutEffect在计算完DOM节点树没有更新到html之前执行，而useEffect则要等到DOM内容更新到html里面之后才会执行
    * 我们通常使用useEffect的原因，是useLayoutEffect如果执行了大数据量的操作导致DOM无法挂载，从而产生卡顿
    
### 3. Context-Hook 父子组件传值
1. 单独组件引入createContext
    ```jsx harmony
   import React, { createContext } from 'react'; 
   // 实例createContext
   const CountContext = createContext()
   ```
2. 父组件引入CountContext组件，并使用
    ```jsx harmony
   // 父组件声明
   <CountContext.Provider value={count}>
       // 子组件Counter
       <Counter />
   </CountContext.Provider> 
   ```
3. 子组件引入CountContext组件
    ```jsx harmony
   // 引入useContext
   import React, { useContext } from 'react';
   // 引入父组件
   import CountContext from ''
   ```
   
4. 子组件获得传递的context值
    ```jsx harmony
   function Counter(){
       const count = useContext(CountContext)  //一句话就可以得到count
       return (<h2>{count}</h2>)
   }
   ```
   
### 4. Ref-Hook
1. 引入
   ```jsx harmony
   import React, { useRef } from 'react'
   ```

2. 使用
    ```jsx harmony
   // 声明ref
   const inputRef = useRef()
   
   // 将声明的ref传给input对象
   <input ref={inputRef}></input>
   
   // 然后我们可以在useEffect中打印 inputRef ，得到input对象信息
   console.log(inputRef)
   ```

## 三. Hooks渲染优化

先说结论useCallback和useMemo都可缓存函数的引用或值，但是从更细的使用角度来说useCallback缓存函数的引用，useMemo缓存计算数据的值
### 1. useMamo
```jsx harmony
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
* 根据官方文档的介绍我们可理解：在a和b的变量值不变的情况下，memoizedValue的值不变。即：useMemo函数的第一个入参函数不会被执行，从而达到节省计算量的目的
### 2. useCallback
```jsx harmony
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
* 根据官网文档的介绍我们可理解：在a和b的变量值不变的情况下，memoizedCallback的引用不变。即：useCallback的第一个入参函数会被缓存，从而达到渲染性能优化的目的

<comment/>
