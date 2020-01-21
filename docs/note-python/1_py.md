# Python遍历列表里面序号和值的方法

```python
list = ['html', 'js', 'css', 'python']

# 方法1
for i in list:
print ("序号：%s 值：%s" % (list.index(i) + 1, i))

# 方法2
for i in range(len(list)):
print ("序号：%s 值：%s" % (i + 1, list[i]))

# 方法3
for i, val in enumerate(list):
print ("序号：%s 值：%s" % (i + 1, val))
# enumerate()函数的第二个参数只是改变了序号的起始值
for i, val in enumerate(list, 2):
print ("序号：%s 值：%s" % (i + 1, val))
```

**结果：**


![1-1](https://s2.ax1x.com/2020/01/21/1kCvrj.png)

