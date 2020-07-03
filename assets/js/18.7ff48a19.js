(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第七章：预处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七章：预处理器"}},[s._v("#")]),s._v(" 第七章：预处理器")]),s._v(" "),a("h2",{attrs:{id:"一-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-介绍"}},[s._v("#")]),s._v(" 一. 介绍")]),s._v(" "),a("ul",[a("li",[s._v("基于CSS的另一种语言")]),s._v(" "),a("li",[s._v("通过工具编译成CSS")]),s._v(" "),a("li",[s._v("添加了很多CSS不具备的特性，如变量")]),s._v(" "),a("li",[s._v("能提升CSS文件的组织")])]),s._v(" "),a("h2",{attrs:{id:"二-优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-优势"}},[s._v("#")]),s._v(" 二. 优势")]),s._v(" "),a("ul",[a("li",[s._v("嵌套，反应层级和约束")]),s._v(" "),a("li",[s._v("变量和计算，减少重复代码")]),s._v(" "),a("li",[s._v("Extend和Mixin 代码片段（类似函数）")]),s._v(" "),a("li",[s._v("循环 适用于复杂有规律的样式")]),s._v(" "),a("li",[s._v("import CSS文件模块化")])]),s._v(" "),a("h2",{attrs:{id:"三-两种预处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-两种预处理器"}},[s._v("#")]),s._v(" 三. 两种预处理器")]),s._v(" "),a("h3",{attrs:{id:"_1-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-less"}},[s._v("#")]),s._v(" 1. less")]),s._v(" "),a("ol",[a("li",[s._v("安装依赖"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("文件尾缀 .less")]),s._v(" "),a("li",[s._v("编译成css文件 -> lessc XXX.less")])]),s._v(" "),a("h4",{attrs:{id:"_1-1-嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-嵌套"}},[s._v("#")]),s._v(" 1.1 嵌套")]),s._v(" "),a("ol",[a("li",[s._v("& -> 同级，个人理解是在后面拼接")])]),s._v(" "),a("h4",{attrs:{id:"_1-2-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-变量"}},[s._v("#")]),s._v(" 1.2 变量")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("@fontSize: 12px;// 数值应带单位\n@bgColor: red;\n.wrapper{\n    background:lighten(@bgColor, 40%);// 函数 -> 颜色变浅\n\n    .nav{\n        font-size: @fontSize;\n    }\n    .content{\n        font-size: @fontSize + 2px;\n        &:hover{\n            background:@bgColor;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"_1-3-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-mixin"}},[s._v("#")]),s._v(" 1.3 mixin")]),s._v(" "),a("ul",[a("li",[s._v("简化代码的方法，能够提高代码的重复使用率")]),s._v(" "),a("li",[s._v("涉及到变量，建议使用mixin(混合宏)来创建相同的代码块")]),s._v(" "),a("li",[s._v("将重复的样式每个使用到的拷贝一份")]),s._v(" "),a("li",[s._v("不足：如果在样式文件中调用同一个mixin(混合宏)，会产生多个对应的样式代码，造成代码的冗余")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v(".block(@fontSize){\n    font-size: @fontSize;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n//调用\n.wrapper{\n    background:lighten(@bgColor, 40%);\n\n    .nav{\n        .block(@fontSize);\n    }\n    .content{\n        .block(@fontSize + 2px);\n        &:hover{\n            background:red;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"_1-4-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-extend"}},[s._v("#")]),s._v(" 1.4 extend")]),s._v(" "),a("ul",[a("li",[s._v("如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用 extend(继承)")]),s._v(" "),a("li",[s._v("把公共的样式提取出来写在一起")]),s._v(" "),a("li",[s._v("不足：如果是类(.class)，不管有没有调用(@extend)，在编译的时候，都会生成对应的CSS")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("@bgColor: red;\n\n.block{\n    font-size: @fontSize;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n// 调用\n.wrapper{\n    background:lighten(@bgColor, 40%);\n\n    .nav:extend(.block){\n        color: #333;\n    }\n    .content{\n        &:extend(.block);\n        &:hover{\n            background:red;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_2-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-sass"}},[s._v("#")]),s._v(" 2. sass")]),s._v(" "),a("ol",[a("li",[s._v("安装依赖"),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node-sass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("文件尾缀 .sass")]),s._v(" "),a("li",[s._v("编译成css文件 -> node-sass XXX.sass")])]),s._v(" "),a("h4",{attrs:{id:"_2-1-嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-嵌套"}},[s._v("#")]),s._v(" 2.1 嵌套")]),s._v(" "),a("p",[s._v("同less")]),s._v(" "),a("h4",{attrs:{id:"_2-2-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-变量"}},[s._v("#")]),s._v(" 2.2 变量")]),s._v(" "),a("ul",[a("li",[s._v("将less的@改为$")])]),s._v(" "),a("h4",{attrs:{id:"_2-3-mixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-mixin"}},[s._v("#")]),s._v(" 2.3 mixin")]),s._v(" "),a("ul",[a("li",[s._v("将less的@改为$")]),s._v(" "),a("li",[s._v("显示指定mixin"),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("@mixin block($fontSize){\n    font-size: $fontSize;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n// 调用\n.wrapper{\n    background:lighten($bgColor, 40%);\n\n    .nav{\n        @include block($fontSize);\n    }\n    .content{\n        @include block($fontSize + 2px);\n        &:hover{\n            background:red;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"_2-4-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-extend"}},[s._v("#")]),s._v(" 2.4 extend")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("$fontSize: 12px;\n$bgColor: red;\n\n.block{\n    font-size: $fontSize;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\n// 调用\n\n.wrapper{\n    background:lighten($bgColor, 40%);\n\n    .nav{\n        @extend .block;\n        color: #333;\n    }\n    .content{\n        @extend .block;\n        &:hover{\n            background:red;\n        }\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("comment")],1)}),[],!1,null,null,null);n.default=t.exports}}]);