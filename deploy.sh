#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 更新代码
git pull 

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

# 发布到域名
echo 'www.killbat.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

#git push -f "https://git@github.com/Meidanlong/kill-bat.git" master:gh-pages
git push -f "https://github.com/Meidanlong/kill-bat.git" master:gh-pages

#git push -f "git@github.com:Meidanlong/meidanlong.github.io.git" master
git push -f "https://github.com/Meidanlong/meidanlong.github.io.git" master

#git push -f "https://git@gitee.com/meidanlong/kill-bat.git" master:gh-pages
git push -f "https://gitee.com/meidanlong/kill-bat.git" master:gh-pages

#git push -f "git@gitee.com:Meidanlong/meidanlong.gitee.io.git" master

cd -
