#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 更新代码
git pull

# 生成静态文件
npm run build

echo "进入dist"
# 进入生成的文件夹
cd docs/.vuepress/dist

# 暂时在index.html的第11行添加
echo "添加百度统计代码"
sed -i '11a 	<script>var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?52b560bdf54963ade216e813ed869ec3";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();</script>' index.html

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

# 发布到域名
echo 'www.wtrue.cn' > CNAME

echo "git提交"
git init
git add .
git commit -m 'deploy'

#git push -f "https://git@github.com/Meidanlong/kill-bat.git" master:gh-pages
git push -f "https://github.com/Meidanlong/kill-bat.git" master:gh-pages

#git push -f "git@github.com:Meidanlong/meidanlong.github.io.git" master
git push -f "https://github.com/Meidanlong/meidanlong.github.io.git" master

#git push -f "https://git@gitee.com/meidanlong/kill-bat.git" master:gh-pages
git push -f "https://gitee.com/meidanlong/wtrue.git" master:master

#git push -f "git@gitee.com:Meidanlong/meidanlong.gitee.io.git" master
