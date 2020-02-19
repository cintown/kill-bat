# mybatis.mapper-locations 配置多个mapper路径

## 一. 解决
```xml
mybatis.mapper-locations=classpath:mappers/push/*.xml, classpath*:/mappers/*.xml
```

**注意点：**
* 在classpath后面的 * 必不可少，缺少型号的话后面的通配符不起作用。

* **表示可以表示任意多级目录
<comment/>
