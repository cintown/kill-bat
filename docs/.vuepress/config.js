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
        text: '专栏',
        items:[
          {text:'我用Python',link:'/blog-python/'},
          {text:'猜你喜欢',link:'/blog-ml/'},
          {text:'',items:[
                {text:'随笔',link:'/blog-note/'},
            ]},
        ]
      },{
        text: '记录',
        items:[
          {text:'IDEA',link:'/problems-idea/'},
          {text:'GIT',link:'/problems-git/'},
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
  },

  plugins: ['@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }]
}
