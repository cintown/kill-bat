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
        text: '笔记',
        items:[
          {text:'Python入门',link:'/blog-python/'},
          {text:'机器学习入门',link:'/blog-ml/'},
          {text:'Springboot2深度实践',link:'/blog-springboot2/'},
          {text:'短视频小程序开发',link:'/blog-wx/'},
          {text:'横扫初级前端JS',link:'/blog-js/'},
        ]
      },{
        text: '记录',
        items:[
          {text:'Idea',link:'/note-idea/'},
          {text:'Tomcat',link:'/note-tomcat/'},
          {text:'Gradle',link:'/note-gradle/'},
          {text:'Git',link:'/note-git/'},
          {text:'Spring',link:'/note-spring/'},
          {text:'MySQL',link:'/note-mysql/'},
          {text:'Windows',link:'/note-windows/'},
          {text:'Python',link:'/note-python/'},
          {text:'Scrapy',link:'/note-scrapy/'},
          {text:'Vue',link:'/note-vue/'},
          {text:'WXdevtools',link:'/note-wxtool/'},
        ]
      },
      {
        text: '面经',
        link: '/interview/'
      },
        {
            text: '历史',
            link: '/history/'
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
