# 纯html使用vue+mintUI

* [背景说明](#背景说明)
* [项目搭建步骤](#项目搭建步骤)

---

## 背景说明

老jquery项目加急一些传统页面，要求：

1. 开发速度比jquery快
2. 样式随意，但要美观
3. 需要页面间要跳转，点击后退能返回之前页面(保留数据)
4. 需要请求后端数据
5. 移动端

对应解决方案：

1. vue
2. mint ui(饿了么)/vant ui(有赞)/nut ui(京东)/cube ui(滴滴)/muse ui(社区)
3. 每个html都new Vue
4. axios
5. flexible

## 项目搭建步骤

1. 下载准备好vue.js,mintUI的js、css和font,flexible.js,axios.js,如font缺失,查看控制台，下载相关文件放到正确路径
2. 生成package.json,编写gulp
3. html引用相关资源，顺序为：mint.css->vue.js->mint.js->...js...css->body后new Vue，不按照此顺序可能导致报错、样式不生效、vue没反应等问题。网上找个正确样例对比一下，就可知道加载顺序。