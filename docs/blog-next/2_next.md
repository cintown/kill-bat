# 第二章： Next.js 集成 AntD

## 一. 添加AntD依赖
```shell
yarn add antd
```

## 二. 全局引入AntD
1. 在page目录下新建一个`_app.js`文件
2. 引入AntD的CSS
	```javascript
	import App from 'next/app'

	import 'antd/dist/antd.css'

	export default App
	```

## 三. 引入babel按需加载
1. 添加依赖
	```javascript
	yarn add babel-plugin-import
	```

2. 在项目根目录建立.babelrc文件
	```javascript
	{
	    "presets":["next/babel"],  //Next.js的总配置文件，相当于继承了它本身的所有配置
	    "plugins":[     //增加新的插件，这个插件就是让antd可以按需引入，包括CSS
	        [
	            "import",
	            {
	                "libraryName":"antd"
	            }
	        ]
	    ]
	}
	```
<comment/>