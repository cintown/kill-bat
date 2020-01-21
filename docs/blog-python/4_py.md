# 第四章：循环语句

## 一. while
1. 代码结构
```python
CONDITION = true

while CONDITION :
    pass
```

2. 与else一起使用
```python
counter = 1
while counter <= 10 :
    counter += 1
    print(counter)
else :
    print('END')
```

## 二. for
1. 代码结构
```python
for target_list in expression_list :
    pass
```
2. 嵌套循环
```python
a = [['apple','banana','orange'],(1,2,3)]

for x in a :
    for y in x :
        print(y,end='') 
# 用‘end=’来控制末尾是否换行，如不写默认为 end='\n'
```
3. 与else一起使用
else会在遍历结束之后执行
```python
a = [['apple','banana','orange'],(1,2,3)]

for x in a :
    for y in x :
        print(y)
else :
    print('遍历完成')
```
4. 指定循环次数 -> range
```python
for x in range(0,10,2):   # 1. 范围是(0,10]  2. 步长是2
    print(x)
    
> 02468    
```
```python
a = [1,2,3,4,5,6,7,8]

for i in range(0,len(a),2):   # 1. 范围是(0,10]  2. 步长是2
    print(a[i])
    
> 1357

# 换一种方法

b = a[0:len(a):2]
print(b)

> 1357
    
```
## 三. 跳出循环
1. break -> 强行终止当前循环，并不执行else后面语句
2. continue -> 跳出当前循环，继续之后的循环


<comment/>
