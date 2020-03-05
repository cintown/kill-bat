# 第四章：布局样式

## 一. 盒模型
![4-1](https://s2.ax1x.com/2020/03/04/3I2ZW9.png)
## 二. 元素显示
1. display 元素显示类型
	* block/inline/inline-block/flex
2. position 元素位置
	* static
	* relative : 1. 相对于元素本身偏移 2. 不会改变本身占据的空间
	* absolute : 1. 对文档流不造成影响 2. 相对与上级最近的relative/absolute定位
	* fixed : 1. 对文档流不造成影响 2. 相对于可视屏幕
	* relative/absolute/fixed 可设置 `z-index`,数值越高越在上层

## 二. 常用布局方法
### 1. table 表格布局
### 2. float 浮动 + margin
#### 2.1 介绍
1. 元素“浮动”
2. 脱离文档流
3. 但不脱离文本流
4. 对自身的影响：
    * 形成“块”（BFC）本身为一个inline，但是float使它可以设置宽高
    * 位置尽量靠上
    * 位置尽量靠左（右）
5. 对兄弟元素的影响
    * 一般来说
    * 上面贴非float元素
    * 旁边贴float元素
    * 不影响其他块级元素位置
    * 影响其他块级元素内部文本
6. 对父级元素的影响
    * 从布局上“消失”
    * 高度塌陷
    * 父元素解决高度塌陷经典方式
    ```css
    .container2::after{
        /*content: 'aaa';*/
        clear:both;
        display: block;
        visibility: hidden;
        height:0;
    }
    ```
    
### 3. inline-block 布局
1. 像文本一样排block元素
2. 没有清楚浮动等问题
3. 需要处理间隙（理解成文字，字与字之间默认有间隙）
    * 方法一：
    ```css
    父：font-size:0;
    子：font-size:14px;（将子容器的字体宽度再设置回来）
    ```
    * 方法二：注释掉或去掉div标签间的空格
    ```html
    <div class="left">
        左
    </div><!--
    --><div class="right">
        右
    </div>
    ```
    

### 4. flexbox 布局
#### 4.1 介绍
1. 弹性盒子
2. 盒子本来就是并列的
3. 指定宽度即可
#### 4.2 举例
* flex后面的参数实际上是占据几份的空间
* 如果没有其他flex元素，flex:1 将自适应剩余空间
```css
width: 70px;
flex: none/1;
```

### 5. 响应式布局
* 在不同设备上正常使用
* 一般主要处理屏幕大小问题
#### 5.1 主要方法
1. 隐藏
2. 折行
3. 留下自适应空间
#### 5.2 具体方法
##### 5.2.1 rem
1. 设置html的font-size，该值为1rem
    ```css
    html{
            font-size: 20px;
        }
    ```
2. 移动端可以用media query指定。注：将小屏幕放在大屏幕下面才会生效
    ```css
    @media (max-width: 375px){
        html{
            font-size:24px;
        }
    }
    @media (max-width: 320px){
        html{
            font-size:20px;
        }
    }
    ```
##### 5.2.2 viewport
* 设置可视区域的大小就等于屏幕大小
    ```html
    <!--适配移动端-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
* 等比放大缩小，使用固定像素
    ```html
    <meta name="viewport" content="width=320">
    ```
##### 5.2.3 media query 
* 为小屏写一个样式，为大屏写一个样式，用media query区分
* 移动端（<= 640px）生效:
    ```css
    @media (max-width: 640px){
        .left{
            display: none;
        }
    }
    
    ```

<comment/>
