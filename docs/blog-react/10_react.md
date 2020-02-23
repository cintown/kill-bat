# 第十章：PropTypes 与 DefaultProps

## 一. PropTypes
* 校验属性类型

### 1. 引入PropTypes
```javascript
// 这里我特意将名称改为Types，用以区分
import Types from 'prop-types';
```

### 2. 校验
* 我们在`TodoItem`组件中，校验属性类型
    ```javascript
    TodoItem.propTypes={
        todoListItem: Types.string,
        todoListDeleteItem: Types.func,
        todoListIndex: Types.number
    }
    ```
    
* 要求必须被传递
    ```javascript
    Types.string.isRequired
    ```


## 二. DefaultProps
* 给属性赋默认值

### 1. 用法
```javascript
TodoItem.defaultProps={
    test: 'hello world'
}
```
<comment/>