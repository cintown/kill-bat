# 第三章： 页面跳转

* 动态路由只能通过 `query`

## 一. Link 组件
1. 标签跳转
2. 在渲染的时候无a标签
3. 路由

```javascript
import Link from 'next/link'
<Link herf="/a" title="AAA">
	sth.
</Link>

# 动态路由

<Link herf="/a?id=1" title="AAA">
	sth.
</Link>

# 路由映射

<Link herf="/a?id=1" as="/a/1" title="AAA">
	sth.
</Link>
```


## 二. Router组件
1. 不需要点击跳转或其他事件跳转
2. 一般在方法中声明

```javascript
import Router from 'next/router'
Router.push('/b')

# 动态路由

import Router from 'next/router'
Router.push({
	pathname: '/b',
	query: {
		id: 2
	}
})

# 路由映射
import Router from 'next/router'
Router.push({
	pathname: '/b',
	query: {
		id: 2
	}
},'/b/2')
```

## 三. 获取router参数
```javascript
import {withRoutrt} from 'next/router'

const A = ({ router }) => <div>A {router.query.id}</div>

export default withRoutrt(A)
```

<comment/>