# webpack

## 相关文章

[webpack 打包原理 ? 看完这篇你就懂了 !](https://segmentfault.com/a/1190000021494964?utm_source=tag-newest)

## 什么是webpack

webpack是一个现代的JavaScript应用程序静态模块打包器。当webpack处理应用程序时，他会递归构建一个依赖关系图，其中包含应用程序需要的每个模块

## entry

入口起点(entry point)指示 webpack 应该使用哪个模块,来作为构建其内部依赖图的开始。

进入入口起点后,webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

每个依赖项随即被处理,最后输出到称之为 bundles 的文件中。

## output

output 属性告诉 webpack 在哪里输出它所创建的 bundles,以及如何命名这些文件,默认值为 ./dist。基本上,整个应用程序结构,都会被编译到你指定的输出路径的文件夹中。

## loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。

loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。

本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

## 手写一个loader


## plugin

loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。

插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。

## 手写一个插件
```javascript
//  同步loader
const loaderUtils = require('loader-utils')
// 利用loader-utils获取loader options里面的配置
module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  console.log(options)
  source += options.message
  // 可以传递更详细的信息
  this.callback(null, source)
}
```
## webpack 优化

## webpack 打包原理

## 构建原理
