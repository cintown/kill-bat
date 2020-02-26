# 第二十一章：React-Redux

## 一. 安装
```shell
yarn add react-redux
```

## 二. 使用
### 1. 在页面渲染使用Provider组件包裹
```javascript
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>  
);
```
* Provider组件的store参数指向了store
* 那么Provider内的所有组件都有能力获取store了

### 2. 子组件中使用connect方法获取或者变更store中的值
```javascript
import {connect} from 'react-redux';

class TodoList extends Comment{
    render(
        return <div> </div>;
}

export default connect(func1,func2)(TodoList);
```

#### 2.1 func1是什么
1. func1参数对应的函数为 mapStateToProps（字面义：将state中的值映射到props中）,接收一个参数state
2. return 对象
    ```javascript
    const mapStateToProps = (state) => {
        return {
            inputValue: state.inputValue
        }
    }
    ```
3. 获取参数时，需用props
    ```javascript
    value={this.props.inputValue}
    ```
#### 2.2 func2是什么
1. func2参数对应的函数为 mapDispatchToProps（字面义：将数据分发到到props中）,接收一个参数dispatch
2. dispatch() -> store.dispatch()
3. return 对象
    ```javascript
    const mapDispatchToProps = (dispatch) => {
        return {
            func3(){
                const action = {
                    type : 'sth_action'
                }
                dispatch(action);
            }
        }
    }
    ```

### 3. 完善store和reducer内容代码

<comment/>
