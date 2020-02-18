# Chrome调试模拟iPhone6时body显示980*1742


## 原因
由于我们大部分移动设备默认的viewport都是980px

## 解决

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```


<comment/>