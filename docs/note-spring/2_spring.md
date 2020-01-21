# The server time zone value ‘XXXXXX’ is unrecognized or represents more than one time zone


## 一. 原因
MySQL 6.0.3 ，是数据库和系统时区差异所造成的
## 一. 解决
### 1. 在jdbc连接的url后面加上serverTimezone=GMT
> 如果需要使用gmt+8时区，需要写成GMT%2B8，否则会被解析为空
### 2. 降低MySQL jdbc驱动版本为5.x

