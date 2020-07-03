(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{260:function(t,s,a){"use strict";a.r(s);var r=a(0),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第十一章：梯度下降法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第十一章：梯度下降法"}},[t._v("#")]),t._v(" 第十一章：梯度下降法")]),t._v(" "),a("h2",{attrs:{id:"一-作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-作用"}},[t._v("#")]),t._v(" 一. 作用")]),t._v(" "),a("ol",[a("li",[t._v("梯度下降法是一个基于搜索的最优化方法")]),t._v(" "),a("li",[t._v("适用于没有数学特征的算法")]),t._v(" "),a("li",[t._v("最小化一个损失函数")]),t._v(" "),a("li",[t._v("相反，最大化一个效用函数应使用梯度上升法")])]),t._v(" "),a("h2",{attrs:{id:"二-图解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-图解"}},[t._v("#")]),t._v(" 二. 图解")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/08/lgXD6P.md.png",alt:"ml-11-1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXPsbj.md.png",alt:"ml-1-1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXp8Ds.md.png",alt:"11-2"}})]),t._v(" "),a("ul",[a("li",[t._v("对于高维函数")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXpN5V.md.png",alt:"11-3"}})]),t._v(" "),a("ul",[a("li",[t._v("有可能找到的解不是全局最优解")]),t._v(" "),a("li",[t._v("解决这个问题的方法是，多次运行")])]),t._v(" "),a("h2",{attrs:{id:"三-线性回归使用梯度下降法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-线性回归使用梯度下降法"}},[t._v("#")]),t._v(" 三. 线性回归使用梯度下降法")]),t._v(" "),a("ul",[a("li",[t._v("线性回归损失函数的梯度是一个向量")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXp0v4.md.png",alt:"11-4"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXpLPf.md.png",alt:"11-5"}})]),t._v(" "),a("ul",[a("li",[t._v("同样使用我们在线性回归中技巧，将yhead整理成两个向量相乘的模式")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lX9uZR.md.png",alt:"11-6"}})]),t._v(" "),a("ul",[a("li",[t._v("我们可以观察到m数量对梯度是有影响的，所以我们考虑到将目标函数除以m")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lX93RO.md.png",alt:"11-7"}})]),t._v(" "),a("h2",{attrs:{id:"四-向量化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-向量化"}},[t._v("#")]),t._v(" 四. 向量化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lX90FP.md.png",alt:"11-8"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXCSSO.md.png",alt:"11-9"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXC17n.md.png",alt:"11-10"}})]),t._v(" "),a("ul",[a("li",[t._v("我们得到结果")])]),t._v(" "),a("blockquote",[a("p",[t._v("在梯度下降前，应对数据进行归一化")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXCUcF.md.png",alt:"11-11"}})]),t._v(" "),a("h2",{attrs:{id:"五-随机梯度下降法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-随机梯度下降法"}},[t._v("#")]),t._v(" 五. 随机梯度下降法")]),t._v(" "),a("h3",{attrs:{id:"_1-批量梯度下降法的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-批量梯度下降法的问题"}},[t._v("#")]),t._v(" 1. 批量梯度下降法的问题")]),t._v(" "),a("ul",[a("li",[t._v("计算量与m相关，但是我们又除以了m")]),t._v(" "),a("li",[t._v("有没有可能将sigma去掉，我们只取一个方向的损失函数的最小值")])]),t._v(" "),a("h3",{attrs:{id:"_2-图示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-图示"}},[t._v("#")]),t._v(" 2. 图示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2020/01/15/lXCrA1.md.png",alt:"11-12"}})]),t._v(" "),a("ul",[a("li",[t._v("这个超参数的选择源自模拟退火的思想")])]),t._v(" "),a("comment")],1)}),[],!1,null,null,null);s.default=_.exports}}]);