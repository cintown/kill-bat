# 第六章： next.js 自定义Document

## 一. 什么是Decument
1. 只有在服务端渲染的时候才会被调用
2. 用来修改服务端渲染的文档内容
3. 一般用来配合第三方css-in-js方案使用

## 二. 使用方法
```jsx harmony
import Docuemnt, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

function withLog(Comp) {
  return props => {
    console.log(props)
    return <Comp {...props} />
  }
}

class MyDocument extends Docuemnt {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const props = await Docuemnt.getInitialProps(ctx)

      return {
        ...props,
        styles: (
          <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

<comment/>
