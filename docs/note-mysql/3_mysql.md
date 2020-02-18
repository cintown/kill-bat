# MySql 连接报警告 SSL 警告问题

> Tue Jan 10 23:49:14 CST 2017 WARN: Establishing SSL connection without server's identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.

## 一. 解决
由
```yml
jdbc:mysql://127.0.0.1/xxx
```
改为
```yml
jdbc:mysql: //127.0.0.1/xxx?useSSL=false
```


<comment/>
