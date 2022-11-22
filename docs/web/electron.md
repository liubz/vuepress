# Electron 开发总结

### Electron进程通信

1.  ipcRenderer.sendTo()

```js
// webContentsId  窗口ID
ipcRenderer.sendTo(webContentsId, channel, ...args)
```


2. 使用全局共享属性

3. 利用主进程中转

4. ipcRenderer.invoke、ipcMain.handle

```js
// 主进程
ipcMain.handle('test', async(event,args) => {
    let result = await somePromise();
    return result;
});
// 渲染进程
ipcRenderer.invoke('test', data).then(result => {
    console.log(result);
    return result;
});
```
### webview 注入 js，开启 contextIsolation js 采用 file://协议

```html
<webview
  :id="'webviewid' + page.openTime"
  :ref="page.activeUrl+page.openTime"
  :key="page.activeUrl+page.openTime"
  v-for="page in pages"
  :class="{active:(activePageUrl+activePageOpenTime)===(page.activeUrl+page.openTime)}"
  class="web-content"
  :src="page.activeUrl"
  :params="page.params"
  :useragent="useragent"
  :preload="preloadFile"
  webpreferences="contextIsolation"
  v-show="((activePageUrl+activePageOpenTime)===(page.activeUrl+page.openTime)) && pageReady"
  @did-start-navigation="handleLoadstart"
  @load-commit="handleLoadCommit(page)"
  @new-window="handleNewWindow"
  @dialog="handleDialog"
  @dom-ready="handlecomplete(page)"
></webview>
<!-- 开启contextIsolation：  webpreferences="contextIsolation" -->
```

```js
// webview 需要使用file协议
const preloadFile = 'file://' + path.resolve(__dirname, 'preload.js')
// preload.js
const { contextBridge, ipcRenderer } = require('electron')
const { remote } = require('electron')
const processGlobal = remote.getGlobal('shareObject')

contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    // whitelist channels
    let validChannels = ['toMain']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain']
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  },
  getUser() {
    return processGlobal.store
  },
})
window.addEventListener('DOMContentLoaded', () => {
  console.log('加载')
  // setInterval(() => {
  //   console.log('加载成功')
  // }, 2000)
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
})
```


### electron 进程挂起或者奔溃
 - process.crash() // 让进程奔溃
 - process.hang() // 让进程挂起

1. 进程奔溃

```js
// 进程奔溃捕获
app.on('render-process-gone', async (event, webContents, details) => {
    if (details) {
        log.info('render-process-gone进程崩溃或被杀死', details.reason)
        winLog.writeInfo('render-process-gone进程崩溃或被杀死', details.reason)
        // 捕获渲染进程崩溃
        if(details.reason === "crashed") {
            const win = Array.from(windowPool.activeWindows).find(win => win.id === webContents.id)
            // 主窗体重新加载页面
            console.log('窗口id', webContents.id)
            if (win.name === 'web_main') {
                win.close()
                const res = await dialog.showMessageBox(win, {
                    type: 'error',
                    title: '进程崩溃了',
                    message: '这个进程已经崩溃.',
                    buttons: ['重新加载', '退出'],
                })
                if(res.response === 0) {
                    // webContents.id === windowPool.mainWindow.id
                    // webContents.reload()
                    app.relaunch();
                    app.exit(0);
                } else {
                    app.exit(0);
                }
            } else  {
                win.close()
            }

        }
    } else {
        log.info('render-process-gone details进程崩溃或被杀死', details)
        winLog.writeInfo('render-process-gone details进程崩溃或被杀死', details)
    }
})
```
1. 进程挂起
```js
win.on('unresponsive', function () {
    const options = {
      type: 'info',
      title: '渲染器进程挂起',
      message: '这个进程已经被挂起.',
      buttons: ['重载', '关闭']
    }
    dialog.showMessageBox(options, function (index) {
      if (index === 0) win.reload()
      else win.close()
    })
  })
```
