# MySQL中类似ORACLE中decode()函数实现

## 一. IF函数
### 1. IF语句
```sql
IF expression THEN 
   statements;
END IF;
```

### 2. IF ELSE语句
```SQL
IF expression THEN
   statements;
ELSE
   else-statements;
END IF;

或

IF(expr1,expr2,expr3)
-- expr1 是TRUE (expr1 <> 0 and expr1 <> NULL)，则 IF()的返回值为expr2; 否则返回值则为 expr3
```

### 3. IF ELSEIF ELSE语句
```sql
IF expression THEN
   statements;
ELSEIF elseif-expression THEN
   elseif-statements;
...
ELSE
   else-statements;
END IF;
```

## 二. CASE语句

### 1. 简单CASE语句

```sql
CASE  case_expression
   WHEN when_expression_1 THEN commands
   WHEN when_expression_2 THEN commands
   ...
   ELSE commands
END CASE;
```
* 简单CASE语句来检查表达式的值与一组唯一值的匹配
* `case_expression`可以是任何有效的表达式。我们将`case_expression`的值与每个WHEN子句中的`when_expression`进行比较，如果`case_expression`和`when_expression_n`的值相等，则执行相应的WHEN分支中的命令(`commands`)
* 如果`WHEN`子句中的`when_expression`与`case_expression`的值匹配，则`ELSE`子句中的命令将被执行。`ELSE`子句是可选的。 如果省略`ELSE`子句，并且找不到匹配项，MySQL将引发错误

**举例：**
```sql
 CASE customerCountry
 WHEN  'USA' THEN
    SET p_shiping = '2-day Shipping';
 WHEN 'Canada' THEN
    SET p_shiping = '3-day Shipping';
 ELSE
    SET p_shiping = '5-day Shipping';
 END CASE;
```

### 2. 可搜索CASE语句
```sql
CASE
    WHEN condition_1 THEN commands
    WHEN condition_2 THEN commands
    ...
    ELSE commands
END CASE;
``` 
* MySQL评估求值`WHEN`子句中的每个条件，直到找到一个值为`TRUE`的条件，然后执行THEN子句中的相应命令(`commands`)
* 如果没有一个条件为`TRUE`，则执行`ELSE`子句中的命令(`commands`)。如果不指定`ELSE`子句，并且没有一个条件为`TRUE`，MySQL将发出错误消息
* MySQL不允许在`THEN`或`ELSE`子句中使用空的命令。 如果您不想处理`ELSE`子句中的逻辑，同时又要防止MySQL引发错误，则可以在ELSE子句中放置一个空的`BEGIN END`块

**举例：**
```sql
 CASE  
 WHEN creditlim > 50000 THEN 
    SET p_customerLevel = 'PLATINUM';
 WHEN (creditlim <= 50000 AND creditlim >= 10000) THEN
    SET p_customerLevel = 'GOLD';
 WHEN creditlim < 10000 THEN
    SET p_customerLevel = 'SILVER';
 END CASE;
```


--- 
# 参考
* [`MySQL if语句` -> 易百教程](https://www.yiibai.com/mysql/if-statement.html)
* [`MySQL CASE语句` -> 易百教程](https://www.yiibai.com/mysql/case-statement.html)
