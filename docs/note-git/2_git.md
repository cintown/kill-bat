# 提交GitHub不显示提交次数

## 一. 原因
是修改了默认的github对应的邮箱

## 二. 解决

```shell
// 如果只想修改这一个仓库的邮箱：  
$ git config user.email "your_email@example.com"  
  
// 可以使用如下命令确认修改是否成功：  
$ git config user.email  
  
// 就会显示你目前的邮箱。  
  
//如果想对所有的仓库生效，避免在别的仓库继续出现这个情况，则输入：  
$ git config --global user.email "your_email@example.com"  
  
// 同样可以查看确认一下：  
$ git config --global user.email  
```
