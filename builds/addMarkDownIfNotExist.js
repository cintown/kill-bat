const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
    // 禁止在引导页面添加评论
    var namearray = dir.split('README')
    if (namearray.length === 1) {
        fs.readFile(dir, 'utf-8', (err, content) => {
            if (err) throw err

            if(content.split('<comment/>').length > 1){
                // 说明已包含评论组件
            }else{
                fs.appendFile(dir, `\n<comment/>`, err => {
                    if (err) throw err
                    // console.log(`add components to ${dir}`)
                })
            }
        })

    }
}
