# 第二章：css选择器

* Cascading Style Sheet -> 层叠样式表

## 一. 基本规则
* css的分号是用来分隔的，可不写
```css
选择器 {
	属性: 值;
	属性: 值
}
```

## 二. 选择器分类
1. 元素选择器 div {}
2. 伪元素选择器 -> 也是一个真是存在的元素
    ```text
    伪元素 -> :before/:after
    伪元素选择器 -> ::before {}
    
    伪元素允许创作人员在元素内容的最前(后)面插入生成内容
    默认地，这个伪元素是行内元素，不过可以使用属性 display 改变这一点
    ```
3. 类选择器 .class {}
4. 属性选择器 [type=radio]{}
5. 伪类选择器 :hover {} -> 一个元素的状态
6. ID选择器 #id {}
7. 组合选择器 [type=checkbox] + laber {}
8. 否定选择器 :not(.class)
9. 通用选择器 * {}

## 三. 选择器的权重
> 即使使用了以下的模拟权重，但是权重是不进位的，id选择器优先级大于11个类相加

1. ID +100
2. 类/属性/伪类 +10
3. 元素/伪元素 +1
4. 其他选择器 +0


1. !important  优先级最高
2. 写在元素style内的样式  优先级高
3. 相同权重  后写的生效

<comment/>