# Scrapy中Request的回调函数不执行


## 一. 举例
```python
def parse(self, response):
    ...
     yield Request(url=parse.urljoin(response.url, title_herf), meta=meta,
                      callback=self.parse_detail)
                      
def parse_detail(self,response):
    ...
```

## 二. 原因
调试的时候，发现回调函数 parse_detail 没有被调用，这可能就是被过滤掉了，
查看 scrapy 的输出日志 offsite/filtered 会显示过滤的数目。

查看[手册](https://doc.scrapy.org/en/latest/faq.html?highlight=offsite%2Ffiltered)发现，
这些日志信息都是由 `scrapy` 中的一个 `middleware` 抛出的，
如果没有自定义，那么这个 `middleware` 就是默认的 `Offsite Spider Middleware`，
它的目的就是过滤掉那些不在 `allowed_domains` 列表中的请求 `requests`


## 三. 解决
1. 在 allowed_domains 中加入 url
2. 在 scrapy.Request() 函数中将参数 dont_filter=True 设置为 True


```python
def parse(self, response):
    ...
     yield Request(url=parse.urljoin(response.url, title_herf), meta=meta,
                      callback=self.parse_detail,dont_filter=True)
-------------------------------------------------^                      
def parse_detail(self,response):
    ...
```
