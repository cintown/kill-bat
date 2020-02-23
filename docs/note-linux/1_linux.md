# Linux下安装npm

## 一. 下载安装包
```shell
wget https://npm.taobao.org/mirrors/node/v4.4.7/node-v4.4.7-linux-x64.tar.gz
```

## 二. 解压安装包
```shell
tar -zxvf node-v4.4.7-linux-x64.tar.gz
```

## 三. 建立软连接
```shell
ln -s /usr/local/node/node-v4.4.7-linux-x64/bin/npm /usr/local/bin/npm
ln -s /usr/local/node/node-v4.4.7-linux-x64/bin/node /usr/local/bin/node
```

## 四. 查看npm版本
```shell
npm -v
```

## 五. npm升级，@后面是版本号
```shell
npm i -g npm@3.3.1
```

<comment/>