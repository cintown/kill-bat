const utils = require('./utils')

module.exports = {
  title: 'kill-bat',
  description: '100天面试',
  base: '/kill-bat/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  port: 8000,
  themeConfig: {
    nav: [
      {
        text: '面试准备',
        link: '/questions/'
      },
      {
        text: '知识点梳',
        link: '/points/'
      },
      {
        text: '专栏',
        items: [{
          text:'基础',
          items:[
              { text: '算法', link: '/algorithms/' },
              { text: 'csdn', link: '/csdn/' }
              ]
        },
          {
            text:'更多',
            items:[
              { text: '问题处理', link: '/problems/' },
              { text: '面经', link: '/interview/' }
            ]
          }
        ]
      } /*,
      {
        text: '公众号',
        link: '/wechat/'
      }*/
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'Meidanlong/kill-bat',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'GitHub',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  //ga: 'UA-109340118-1',
  markdown: {
    lineNumbers: true,
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
