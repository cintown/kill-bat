# git 切换分支报错：error: pathspec 'release/20200224' did not match any file(s) known to git

## 一. 原因
* 推测是没有得到最新的分支更新信息

## 二. 解决
1. 执行命令 `git fetch` 取回所有分支的更新
2. 执行 `git branch -a` 可以看到对应分支（已经更新分支信息）
3. 切换分支 `git checkout release/20200224`
<comment/>