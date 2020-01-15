# Tomcat部署war和war exploded区别

答：
1. war模式这种可以称之为是发布模式，就是先将WEB工程打成war包，然后再将其上传到服务器进行发布
2. war exploded模式是将WEB工程以当前文件夹的位置关系上传到服务器，即直接把文件夹、jsp页面 、classes等等移到Tomcat 部署文件夹里面，进行加载部署。因此这种方式支持热部署。<br>
`一般在开发的时候用这种方式`
3. 在平时开发的时候，使用热部署的话，应该对Tomcat进行相应的设置，这样的话修改的jsp界面什么的东西才可以及时的显示出来。