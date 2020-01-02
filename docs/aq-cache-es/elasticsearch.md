# ElasticSearch

## ES 架构模型

## ES 结构与关系型数据库的对应

|    ES    |       名称       | 关系型数据库 |
| :------: | :--------------: | :----------: |
| Document |       文档       |     记录     |
|  Index   |       索引       |    数据库    |
|   Type   | 索引中的数据类型 |      表      |
|  Field   |       字段       |      列      |

## ES 如何实现 Master 选举

## ES 更新和删除文档的过程

## ES 搜索的过程

1. 客户端发送一个请求给协调节点（coordinate node）
2. 协调节点将搜索的请求转发给所有的 shard 对应的 primary shard 或 replica shard
3. query phase：每一个 shard 将自己搜索的结果（其实也就是一些唯一标识），返回给协调节点，由协调节点进行数据的合并，排序，分页等操作，产出最后的结果
4. fetch phase：接着由协调节点，根据唯一标识去各个节点进行拉去数据，最总返回给客户端

## ES 倒排索引

## ES 在并发情况下如何保持读写一致









<comment-comment/>