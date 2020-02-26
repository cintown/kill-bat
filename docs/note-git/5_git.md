# 工作中用到的 Git 命令

## 一. 查看某个人操作历史记录
```shell
# 作者可用‘|’管道查询
# master..<branchName> 表示 master以后的branchName分支
# 格式化 "$@" 可先删除
git log --graph --color=always --format="%C(auto)%h%d %s %C(black)%C(bold)%cr %an" "$@" --author="\(meidanlong\)" master..branchName
```


## 二. 查看当前分支是从哪个分支上拉取的
```shell
git reflog show <childBranch>
```
