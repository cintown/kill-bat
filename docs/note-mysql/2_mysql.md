# Navicat连接MySQL8.0出现2059错误

## 一. 原因

在mysql8之前的版本中加密规则为mysql_native_password，而在mysql8以后的加密规则为caching_sha2_password

## 二. 解决
### 1. 将mysql8.0以后验证方式改为以前版本使用的验证方式`mysql_native_password`
* 找到mysql对应的安装目录下`my-default.ini`文件
* 将default_authentication_plugin= `caching_sha2_password` 改为 default_authentication_plugin= `mysql_native_password`

### 2. 以管理员身份运行cmd，进入mysql的安装目录下的bin文件夹

### 3. 若没有data文件夹，执行以下命令
1. `mysqld -install`
2. `mysqld --initialize`

> 此时查看已有data文件夹

### 4. 登录数据库 
* `mysql -u root -p` 然后输入密码

### 5. 修改加密规则
* 执行 `ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;`

### 6. 更新用户密码
* `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxx';`

### 7. 刷新权限
* `FLUSH PRIVILEGES;`

### 8. 成功连接
