(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{401:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql-连接报警告-ssl-警告问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-连接报警告-ssl-警告问题"}},[t._v("#")]),t._v(" MySql 连接报警告 SSL 警告问题")]),t._v(" "),s("blockquote",[s("p",[t._v("Tue Jan 10 23:49:14 CST 2017 WARN: Establishing SSL connection without server's identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn't set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to 'false'. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.")])]),t._v(" "),s("h2",{attrs:{id:"一-解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-解决"}},[t._v("#")]),t._v(" 一. 解决")]),t._v(" "),s("p",[t._v("由")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1/xxx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("改为")]),t._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jdbc:mysql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" //127.0.0.1/xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("useSSL=false\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("comment")],1)}),[],!1,null,null,null);e.default=n.exports}}]);