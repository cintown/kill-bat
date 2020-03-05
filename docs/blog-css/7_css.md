# 第七章：预处理器

## 一. 介绍
* 基于CSS的另一种语言
* 通过工具编译成CSS
* 添加了很多CSS不具备的特性，如变量
* 能提升CSS文件的组织

## 二. 优势
* 嵌套，反应层级和约束
* 变量和计算，减少重复代码
* Extend和Mixin 代码片段（类似函数）
* 循环 适用于复杂有规律的样式
* import CSS文件模块化

## 三. 两种预处理器
### 1. less
1. 安装依赖
    ```shell
    npm install less
    ```
2. 文件尾缀 .less
3. 编译成css文件 -> lessc XXX.less
#### 1.1 嵌套
1. & -> 同级，个人理解是在后面拼接

#### 1.2 变量
```html
@fontSize: 12px;// 数值应带单位
@bgColor: red;
.wrapper{
    background:lighten(@bgColor, 40%);// 函数 -> 颜色变浅

    .nav{
        font-size: @fontSize;
    }
    .content{
        font-size: @fontSize + 2px;
        &:hover{
            background:@bgColor;
        }
    }
}
```
#### 1.3 mixin
* 简化代码的方法，能够提高代码的重复使用率
* 涉及到变量，建议使用mixin(混合宏)来创建相同的代码块
* 将重复的样式每个使用到的拷贝一份
* 不足：如果在样式文件中调用同一个mixin(混合宏)，会产生多个对应的样式代码，造成代码的冗余
```html
.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

//调用
.wrapper{
    background:lighten(@bgColor, 40%);

    .nav{
        .block(@fontSize);
    }
    .content{
        .block(@fontSize + 2px);
        &:hover{
            background:red;
        }
    }
}
```

#### 1.4 extend
* 如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用 extend(继承)
* 把公共的样式提取出来写在一起
* 不足：如果是类(.class)，不管有没有调用(@extend)，在编译的时候，都会生成对应的CSS
```html
@bgColor: red;

.block{
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

// 调用
.wrapper{
    background:lighten(@bgColor, 40%);

    .nav:extend(.block){
        color: #333;
    }
    .content{
        &:extend(.block);
        &:hover{
            background:red;
        }
    }
}
```
### 2. sass
1. 安装依赖
    ```shell
    npm install node-sass
    ```
2. 文件尾缀 .sass
3. 编译成css文件 -> node-sass XXX.sass
#### 2.1 嵌套
同less
#### 2.2 变量
* 将less的@改为$
#### 2.3 mixin
* 将less的@改为$
* 显示指定mixin 
    ```html
    @mixin block($fontSize){
        font-size: $fontSize;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    
    // 调用
    .wrapper{
        background:lighten($bgColor, 40%);
    
        .nav{
            @include block($fontSize);
        }
        .content{
            @include block($fontSize + 2px);
            &:hover{
                background:red;
            }
        }
    }
    ```
#### 2.4 extend
```html
$fontSize: 12px;
$bgColor: red;

.block{
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

// 调用

.wrapper{
    background:lighten($bgColor, 40%);

    .nav{
        @extend .block;
        color: #333;
    }
    .content{
        @extend .block;
        &:hover{
            background:red;
        }
    }
}
```
