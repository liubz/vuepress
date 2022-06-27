# Electron 性能优化

<!-- powerMonitor 模块 -->

### 性能优化技巧

1. 引入第三方模块需谨慎
   - 在 Web 服务上安装 Node.js 模块，我们一般不会关注 Node.js 模块的体积和加载该模块带来的损耗。但我们现在使用的是 Electron，不同于 Web 服务，我们开发的应用是要打包发布给客户的，体积庞大的 Node.js 包不利于我们应用程序的分发工作。
   - 服务于 Web 的 Node.js 模块也不关注应用的启动效率，因此它们往往会在应用启动时做大量的初始化工作，但这在 Electron 应用中也是不可接受的，我们往往希望首屏加载时间尽量短。
   - 非必要的Node.js模块尽量再使用时加载
2. 避免进程等待
   - 避免使用同步操作(如：读取文件、下载文件等)
3. 判断系统是否处于空闲状态，可以使用Electron提供的如下API
   - powerMonitor.getSystemIdleState(idleThreshold);
   - getSystemIdleState可以获取当前系统是否处于空闲状态，idleThreshold是一个整型参数，代表系统处于空闲状态的时长
4. 尽量避免require方法，因为require是一项昂贵的操作，占用资源较多，这一点尤其体现在Windows系统中
5. 你应该尽可能地把CSS和JavaScript合并到同一个文件中，以避免不必要的require和浏览器加载工作
6. 调试工具
  - yarn add devtron --dev
  - require('devtron').install()
