# 第一章：Spring整体架构和环境搭建

## 一. 下载Spring源码
### 1. 找到Github
文章对应版本为spring-framework 5.0.x，[传送门](https://github.com/spring-projects/spring-framework/tree/5.0.x)
### 2. 下载源码到本地
你可以使用git bash（windows用户），通过git clone 对应的链接来获取源码<br>
当然，你也可以直接使用idea -> file -> new -> Project from Version Control -> Git 来下载<br>
无论怎样，这些都是常规操作，不再赘述。但是当源码下载下来以后编译会出现一些报错，我们重点来看一下应该怎么去解决这些问题

## 二. Spring源码编译
### 1. 环境
* JDK
* Gradle

### 2. 编译
使用不同ide编译应该重点看一下对应的md说明文档↓<br>
[使用eclipse编译](https://github.com/spring-projects/spring-framework/blob/5.0.x/import-into-eclipse.md)<br>
[使用idea编译](https://github.com/spring-projects/spring-framework/blob/5.0.x/import-into-idea.md)<br>
这里以idea为例

#### 2.1 对 Spring-oxm 模块进行预编译
进入spring-framework 目录，可使用idea的终端，执行
```shell script
gradlew :spring-oxm:compileTestJava
```

#### 2.2 编译整个Spring的源码
还是spring-framework 目录，执行
```shell script
gradlew build -x test
```
> -x test  是编译期间忽略测试用例，Spring的测试用例，有些是编译不过的

### 3. 刷新Gradle
Reimport all gradle，重新刷新一下依赖，应该就可以编译成功了！


<comment/>