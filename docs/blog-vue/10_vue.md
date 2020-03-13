# Vue slot插槽

## 一. 插槽
### 1. 目的
* 子组件的内容由父组件决定

### 2. 用法

1. 父组件在子组件标签内设置插槽内容
2. 子组件设置`<slot>`获取内容
3. 需要包裹在`template`
4. 具名插槽可指定插槽名称

```html
<div id="root">
	<child>
	  <h1 slot="header">header</h1>
	  <h1 slot="footer">footer</h1>
	</child>
</div>

<script>

	var child = {
	  template: `<div>
	              <slot name="header"></slot>
	              <div>
	                <h2>content</h2>
	              </div>
	              <slot name="footer"></slot>
	            </div>`
	}

	var vm = new Vue({
	  components: {
	    child: child
	  },
	  el: "#root"
	})
</script>
```

## 二. 作用域插槽

### 1. 什么是作用域插槽

* 正是插槽作用在子组件的内容由父组件决定，那么有时需要传值
* 通过插槽配合传值就是作用域插槽

### 2. 用法
1. 使用 `slot-scope="name"` 来声明从子组件获得的属性，可通过 `name.属性名` 获取
2. 在父组件定义数据展示的形式

```html
<div id="root">
	<child>
		<template slot-scope="props">
			<h1>{{props.item}}</h1>
		</template>
	</child>
</div>

<script>

	Vue.component('child', {
		data: function() {
			return {
				list: [1, 2, 3, 4]
			}
		},
		template: `<div>
					<ul>
						<slot 
							v-for="item of list"
							:item=item
						></slot>
					</ul>
				   </div>`
	})

	var vm = new Vue({
		el: '#root'
	})
</script>
```
<comment/>