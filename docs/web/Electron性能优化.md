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
6. 大量计算开启或者大文件下载上可以采用开启webwork线程
7. 优化窗口启动（如预览图片、播放视频）预先创建一个通用窗口，通过路由跳转加载页面，达到秒开。
8. 禁用Electron 功能可大幅度提升性能
```js
import { app } from 'electron'

export function commandLine() {
  const commandLineParams = ['no-sandbox', 'disable-gpu', 'disable-software-rasterizer', 'disable-gpu-compositing', 'disable-gpu-rasterization',  'disable-gpu-sandbox', '--no-sandbox', 'disable-features', 'disable-password-generation', 'process-per-site', 'disable-crash-handler', 'disable-breakpad', 'disable-glsl-translator', 'disable-java', 'disable-speech-api', 'disable-voice-input', 'disable-sync', 'disable-app-window-cycling', 'disable-client-side-phishing-detection', 'disable-cloud-import', 'disable-datasaver-prompt', 'disable-demo-mode', 'disable-device-discovery-notifications', 'disable-logging', 'disable-network-portal-notification', 'ignore-certificate-errors', 'in-process-gpu'];
  for (let i=0; i<commandLineParams.length; i++) {
    if (commandLineParams[i] === 'disable-features') {
      app.commandLine.appendSwitch(commandLineParams[i], 'electron')
    } else if (commandLineParams[i] === 'disable-features') {
      app.commandLine.appendSwitch(commandLineParams[i], 'true')
    } else {
      app.commandLine.appendSwitch(commandLineParams[i])
    }
  }
  app.disableHardwareAcceleration()
}
```
9. 使用requestIdleCallback开启任务优先级队列 
