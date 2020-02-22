# 第六章：定义样式

## 一. css文件
* 引入css文件，需要些`.css`后缀
* css对应的类选择器，正确是书写方式是 `className`，如果写成`class`会与React的类重复


## 二. dangerouslySetInnerHTML
* 如果文字中带有标签(如`<h1>`)，这是还想保留样式，不想做转义，那么可以使用`dangerouslySetInnerHTML`
    ```javascript
    // 外面的大括号代表为js表达式
    // 里面的大括号代表为一个对象
    // __html 代表给html属性赋值
    dangerouslySetInnerHTML = {{__html:item}}
    ```

## 三. label
* label用于扩大点击范围
* 当label被点击时，想让光标直接聚焦在input框中，这时候不能使用`for`,需使用React的`htmlFor`
<comment/>