# 第十三章：React 中 ref 的使用

## 一. 含义
* ref 标志引用，可以获取标签的引用

## 二. 使用

### 1. 声明
```javascript
<input
  id="textArea"
  value = {this.state.inputValue}
  onChange={this.handleInputChange}
  // ref= {(myInput) => {this.input =  myInput}}
  ref= {(input) => {this.myInput =  input}}
/>
```

### 2. 使用
```javascript
this.input.value 
```

### 3. 注意
* 这种方法可以直接操作DOM元素，React中是不推荐使用的
* 要获取正确的DOM元素，应该在异步的方法，如（setState方法）结束后调用,这里可以使用setState的回调方法

<comment/>