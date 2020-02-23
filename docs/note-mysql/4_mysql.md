# mysql连接报错：Unknown system variable 'query_cache_size'

## 一. 解决
需要升级mysql版本到8.0.11

```shell
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.11</version>
</dependency>
```

<comment/>