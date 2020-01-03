const path = require('path')
const fs = require('fs')

const sidebarMap = require('./sidebarMap.js')

exports.inferSiderbars = () => {
  const sidebar = {}
  sidebarMap.forEach(({ title, dirname }) => {
    const dirpath = path.resolve(__dirname, '../' + dirname)
    const parent = `/${dirname}/`
    const children = fs.readdirSync(dirpath)
      .filter(
        item =>
          item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()
      )
      .sort(function (prev,next) {
        if(next.includes('README.md')) return 1
        let prev_nums = prev.split("_")
        let prev_num
        let next_nums = next.split("_")
        let next_num
        if(prev_nums.length>1){
          prev_num = parseInt(prev_nums[0])
        }
        if(next_nums.length>1){
          next_num = parseInt(next_nums[0])
        }
        if(prev_num>next_num) return 1
        else return -1
      })
      // .sort((prev, next) => (next.includes('README.md') ? 1 : -1))
      // .sort((prev, next) => (next.substr(0,next.indexOf('_'))<prev.substr(0,prev.indexOf('_'))? 1 : -1))
      // .map(item => item.replace(/(README)?(.md)$/, ''))
      .map(item => (item.includes('README') ? '' : item))
    sidebar[parent] = [
      {
        title,
        children,
        collapsable: true
      }
    ]
  })
  return sidebar
}
