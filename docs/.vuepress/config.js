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
        text: '面试题',
        items:[
          {text: '更新中...',link: '/'}]
      },
      {
        text: '系列文章',
        items:[
          {text: '弹幕博客',link: '/serious-dmblog/'}]
      },
      {
        text: '博客笔记',
        items:[
          {
            text:'语言',
            items:[
              {text:'Python笔记',link:'/blog-python/'},
            ]
          },{
            text:'后端',
            items:[
              {text:'Springboot2深度实践',link:'/blog-springboot2/'},
              {text:'Spring源码深度解析',link:'/blog-spring-sdjx/'},
              {text:'Scrapy分布式爬虫',link:'/blog-scrapy/'},
            ]
          },{
            text:'前端',
            items:[
              {text:'横扫初级前端JS',link:'/blog-js/'},
              {text:'React开发简书项目',link:'/blog-react/'},
            ]
          },{
            text:'微信系',
            items:[
              {text:'短视频小程序开发',link:'/blog-wx/'},
              {text:'小游戏开发',link:'/blog-wxgame/'},
              {text:'Cocos Creator入门',link:'/blog-cocos/'},
            ]
          },{
            text:'人工智能',
            items:[
              {text:'机器学习',link:'/blog-ml/'},
            ]
          }
        ]
      },{
        text: '问题解决',
        items:[
          {
            text: '开发工具',
            items:[
              {text:'Idea',link:'/note-idea/'},
              {text:'WXdevtools',link:'/note-wxtool/'},
            ]
          },{
            text: '插件',
            items:[
              {text:'Tomcat',link:'/note-tomcat/'},
              {text:'Gradle',link:'/note-gradle/'},
              {text:'Git',link:'/note-git/'},
            ]
          },{
            text: '系统',
            items:[
              {text:'Windows',link:'/note-windows/'},
              {text:'Linux',link:'/note-linux/'},
            ]
          },{
            text: '语言',
            items:[
              {text:'Python',link:'/note-python/'},
            ]
          },{
            text: '框架',
            items:[
              {text:'Spring',link:'/note-spring/'},
              {text:'Scrapy',link:'/note-scrapy/'},
              {text:'Vue',link:'/note-vue/'},
              {text:'React',link:'/note-react/'},
            ]
          },{
            text: '数据库',
            items:[
              {text:'MySQL',link:'/note-mysql/'},
            ]
          }
        ]
      },
      {
        text: '面经',
        link: '/interview/'
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'Meidanlong/all-in-one',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: 'GitHub',
    sidebarDepth: 3,
    algolia: {
      applicationID:'9PW9QDHYJ2',
      apiKey: 'b1612e42b87025f9813a09e2a82a9aec'
    }
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
  },

  plugins: ['@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }]
}
