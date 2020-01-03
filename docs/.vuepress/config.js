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
          {text: 'Java',items: [
              {text:'基础',link:'/aq-java-basic/'},
              {text:'JVM',link:'/aq-java-jvm/'},
            ]},
          {text: '缓存',items:[
              {text:'ES',link:'/aq-cache-es/'},
              {text:'MongoDB',link:'/aq-cache-mongodb/'},
              {text:'Redis',link:'/aq-cache-redis/'},
            ]},
          {text:'框架',items:[
              {text:'Spring',link:'/aq-structure-spring/'},
              {text:'Dubbo',link:'/aq-structure-dubbo/'},
              {text:'Netty',link:'/aq-structure-netty/'},
              {text:'Zookeeper',link:'/aq-structure-zookeeper/'},
            ]},
          {text:'队列',items:[
              {text:'RabbitMQ',link:'aq-queue-rabbitmq'}
            ]}
        ]
      },
      {
        text: '专栏',
        items:[
          {text:'Java进阶',link:'/blog-java-basic/'},
          {text:'致命算法',link:'/blog-algorithms/'},
          {text:'我用Python',link:'/blog-python/'},
          {text:'架构之路',link:'/blog-jiagou/'},
        ]
      },
      {
        text: '面经',
        items:[
          {text:'阿里巴巴',link:'/interview-alibaba/'},
          {text:'陌陌',link:'/interview-momo/'},
          {text:'当当网',link:'/interview-dangdang/'},
          {text:'汽车之家',link:'/interview-autohome/'},
          {text:'58同城',link:'/interview-58/'},
        ]
      },{
        text: '记录',
        link: '/'
      }/*,
      {
        text: '公众号',
        link: '/wechat/'
      }*/
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
  }
}
