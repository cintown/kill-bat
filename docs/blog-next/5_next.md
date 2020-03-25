# 第五章：next.js 获取数据

## 一. getInitialProps属性
1. 在页面中获取数据
2. 在_app.js中获取全局的数据
3. 与服务器端数据同步
4. next.js的数据获取规范
5. 只有放在pages目录下的getInitialProps才会被调用
6. 可以在服务端渲染的时候就拿到数据渲染html，而不需要等到客户端加载完js再去渲染

## 二. 使用方法
* 会传递到组件我的props属性中
```jsx harmony
const A = ({name}) => <div>{name}</div>
A.getInitialProps = async () => {
	// 可执行异步操作
	const promise = new Promise((resolve) => {
		setTimeOut(() => {
			resolve({
				name: 'meidl'
			})
		})
	})
	// 同步
	// return {
	// 	name: 'meidl'
	// }
	return await promise;
}
```

## 三. 自定义App
1. 固定Layout
2. 保持一些公用的状态
3. 给页面传入一些自定义的数据
4. 自定义错误处理
5. 每次页面切换_app.js的getInitialProps都会被执行

### 1. 使用方法
```jsx harmony
import App,{Container} from 'next/app'
class MyApp extends App {
    static async getInitialProps({Component,ctx}){
        let pageProps
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }
            
        return {
            pageProps
        }
    }
    
    render(){
        const {Component, pageProps} = this.props
        return (
            <Container>
                <Component {...pageProps}/>
            </Container>
        )
    }
}
```

<comment/>
