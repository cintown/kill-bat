const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  // 禁止在引导页面添加评论
  var namearray = dir.split('README')
  if (namearray.length === 1) {
    // \n
    fs.appendFile(dir, `<comment/>`, err => {
      if (err) throw err
      console.log(`add components to ${dir}`)
    })
  }
}
