# 第二十二章：Styled-Components与Reset.css结合

## 一. Styled-Components
### 1. 安装
```shell
yarn add styled-components
```

### 2. style.js
1. 将css改为js文件
2. 引入 injectGlobal
    ```javascript
    import { injectGlobal } from 'styled-components';
    injectGlobal`
        // 全局样式
        body {
            margin: 0;
            padding: 0;
        }
    `
    ```

## 二. Reset.css
* 在PC各浏览器中样式统一
### 1. 引入文件
```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
### 2. 结合styled-components
* 替换styled-components示例代码中body部分

<comment/>