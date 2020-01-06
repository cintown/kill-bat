# 字符串

## 14 最长公共前缀.

### 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

> 输入: ["flower","flow","flight"]
> 输出: "fl"

示例 2:

> 输入: ["dog","racecar","car"]
> 输出: ""

解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

---

### 实现

```java
public String longestCommonPrefix(String[] strs) {
        //特殊情况
        if(null == strs||0 == strs.length)//字符数组为空的情况
            return "";
        if(1 == strs.length)//数组中只有一个字符串，那么前缀就是他本身
            return strs[0];

        boolean finalRound = false;
        boolean isPlusIndex = true;
        int index = 0;

        while(!finalRound){
            for(int i=1; i<strs.length; i++){
                if(index > strs[i-1].length() ||index > strs[i].length()){//如果超出某个字符串长度了，终止//这个也同时校验了某一个字符串为空的情况
                    finalRound = true;
                    isPlusIndex = false;
                    break;
                }
                if(strs[i-1].substring(0,index).equals(strs[i].substring(0,index))) {

                }  else{//如果前缀不相等了，终止
                    finalRound = true;
                    isPlusIndex = false;
                    break;
                }
            }

            if(isPlusIndex)
                index++;
        }

        return strs[0].substring(0,index-1);//因为我把最开始假设多了一位“”，所以实际的索引要减去一
    }
```

用间：9ms
战胜：77.55%

---

### 反思

1. 其实可以单拿出数组中第一个字符串作为标准，让其与之后的字符串进行比较。如果有相同前缀，第一个字符串必然也有。若前缀不同则可以直接 return ""。
2. 我们在拿第一个字符串为标准比较前缀的时候。举个例子，比如第一个字符串和第二字符串前 5 位都是一致的，但是在跟第三个字符串比较的时候只有前三位一致。也就是说，我们的前缀字节数应该是随着遍历的深度越来越少。这样如果我们还是从字符串的第一个字节开始比较的话，很大几率我们的前几位字符都是一样的，这样就浪费了一些时间。相反我们从字符串的末位字符开始比较，则很快能筛掉不一致的字符。

---

### 优化

```java
public String longestCommonPrefix3(String[] strs) {
        if(strs.length == 0) return "";
        String prefix = strs[0];
        for (int i = 0; i <= strs.length - 1; i++){
            while(!strs[i].startsWith(prefix)){
                prefix = prefix.substring(0,prefix.length()-1);
            }
        }
        return prefix;
    }
```

用时：9ms
战胜：77.55%

---

### 反思

1. 首先我们拿第一个字符串作为标准，就没有必要再让他跟自己比较了
2. 如果发现没有公共前缀，直接跳出循环，减少系统开销

---

### 优化

```java
public String longestCommonPrefix4(String[] strs) {
        if(strs.length == 0 || strs[0].length() == 0) return "";
        String prefix = strs[0];
        for (int i = 1; i <= strs.length - 1; i++){
            if(!"".equals(prefix)){
                while(!strs[i].startsWith(prefix)){
                    prefix = prefix.substring(0,prefix.length()-1);
                }
            }
        }
        return prefix;
    }
```

用时：6ms
战胜：98.61%

---

### 总结

有的时候找前面相似的问题，从末位排除是更好的办法。

---

## 28 实现 strStr().

### 题目描述

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。

示例 1:

> 输入: haystack = "hello", needle = "ll"
> 输出: 2

示例 2:

> 输入: haystack = "aaaaa", needle = "bba"
> 输出: -1

说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

---

### 实现

```java
public int strStr(String haystack, String needle) {
        //特殊情况
        if(null == needle || "".equals(needle))
            return 0;
        if(null == haystack || "".equals(haystack)||!haystack.contains(needle))
            return -1;

        //接下来肯定是haystack包含needle的情况
        char needleFirstChar = needle.charAt(0);//获取needle的第一位字符
        int returnInt = haystack.indexOf(needleFirstChar);//找到needle第一位字符在haystack中第一次出现的位置，初始化
        String partHaystack = haystack.substring(returnInt,returnInt+needle.length());//partHaystack是从returnInt开始截取needle长度的字符串

        while(!needle.equals(partHaystack)){//先判断partHaystack是否跟指定字符串相等
            returnInt++;
            returnInt += haystack.substring(returnInt).indexOf(needleFirstChar);//取从returnInt之后以为到末尾组成的新字符串中，第一次出现needleFirstChar的位置
            partHaystack = haystack.substring(returnInt,returnInt+needle.length());//从该位置截取needle长度的字符串用于作比较
        }

        return returnInt;
    }
```

用间：5ms
战胜：90.31%

---

### 反思

String 类的 contains 方法就提供了一个参数为 String 的类似的方法。不过参数不能为空，否则会报空指针异常“NullPointerException”

```java
public int indexOf(String str) {
    return indexOf(str, 0);
}
public int indexOf(String str, int fromIndex) {
    return indexOf(value, 0, value.length,
            str.value, 0, str.value.length, fromIndex);
}
static int indexOf(char[] source, int sourceOffset, int sourceCount,
        char[] target, int targetOffset, int targetCount,
        int fromIndex) {
    if (fromIndex >= sourceCount) {
        return (targetCount == 0 ? sourceCount : -1);
    }
    if (fromIndex < 0) {
        fromIndex = 0;
    }
    if (targetCount == 0) {
        return fromIndex;
    }

    char first = target[targetOffset];
    int max = sourceOffset + (sourceCount - targetCount);

    for (int i = sourceOffset + fromIndex; i <= max; i++) {
        /* Look for first character. */
        if (source[i] != first) {
            while (++i <= max && source[i] != first);
        }

        /* Found first character, now look at the rest of v2 */
        if (i <= max) {
            int j = i + 1;
            int end = j + targetCount - 1;
            for (int k = targetOffset + 1; j < end && source[j]
                    == target[k]; j++, k++);

            if (j == end) {
                /* Found whole string. */
                return i - sourceOffset;
            }
        }
    }
    return -1;
}
```

---

### 优化

```java
public int strStr1(String haystack, String needle) {
       //特殊情况
       if(null == needle || "".equals(needle))
           return 0;
       else
           return haystack.indexOf(needle);
   }
```

用时：6ms
战胜：80.45%

---

### 总结

1. while 循环是先判断后循环 ，而 do–while 循环是先循环后判断
2. 关于 substring 的双参方法 substring(a, b),指的是截取字符串 **[a,b)** 位字符
3. 还需多多了解源码











<comment-comment/>