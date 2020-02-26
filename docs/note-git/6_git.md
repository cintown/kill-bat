# Git Log 中文乱码问题

## 一. 问题

![6-1](https://s2.ax1x.com/2020/02/26/3Nu6Lq.th.png)

## 一. 解决

1. 运行Git Bash窗口，在该窗口导航条（即最上面）右键，选择Options−>Text，找到下面两处
    ```text
    Locale:选择 zh_CN 
    Charector set:选择 UTF-8
    ```
    ![6-2](https://s2.ax1x.com/2020/02/26/3NK5Af.th.png)
2. 设置命令
    ```text
    git config --global i18n.commitencoding utf-8  --注释：该命令表示提交命令的时候使用utf-8编码集提交
    git config --global i18n.logoutputencoding utf-8 --注释：该命令表示日志输出时使用utf-8编码集显示
    export LESSCHARSET=utf-8  --注释：设置LESS字符集为utf-8
    ```
