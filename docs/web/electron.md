# Electron 开发总结

### 渲染进程通信

1.  ipcRenderer.sendTo()

```js
// webContentsId  窗口ID
ipcRenderer.sendTo(webContentsId, channel, ...args)
```

2. 使用全局共享属性

3. 利用主进程中转

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
