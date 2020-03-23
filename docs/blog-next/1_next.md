# 第一章： Next.js 集成 CSS

## 一. 下载依赖
```shell
yarn add @zeit/next-css
```

## 二. 新建 next.config.js
`next.config.js集成了Next.js的默认配置` 

```javascript
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({})
```
<comment/>