# mysql连接报错：The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more than one time zone

## 一. 解决
在mysql连接的url后面添加`&serverTimezone=GMT%2B8`

<comment/>