# git add . 的时候遇到 warning: LF will be replaced by CRLF in ......

## 一. 原因
原因是路径中存在 `/` 的符号转义问题，false就是不转换符号默认是true，相当于把路径的 `/ `符号进行转义，这样添加的时候就有问题

## 二. 解决
```shell
git config --global core.autocrlf false
```