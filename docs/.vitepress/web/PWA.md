# PWA

## 注册 service worker

1.  scriptURL:Service Worker 的文件地址。
2.  options

- scope 表示定义 Service Worker 注册的可控制的 URL 范围。通常是相对 URL 的。默认值是当前的 location。
- updateViaCache 用于定义注册的 Service Worker 文件是否通过 HTTP 缓存的策略。有以下值：
  1.  updateViaCache 用于定义注册的 Service Worker 文件是否通过 HTTP 缓存的策略。有以下值：
  2.  all：所有 serviceWorker 文件都经过 HTTP 缓存。
  3.  none：所有 serviceWorker 文件都不经过 HTTP 缓存。

```js
// navigator.serviceWorker.register(scriptUrl, options)
navigator.serviceWorker
  .register('sw.js', {
    scope: './',
    pdateViaCache: 'none',
  })
  .then(() => {
    console.log('注册成功')
  })
  .catch((e) => {
    console.log('注册失败', e)
  })
```

## 卸载 service worker

```js
navigator.serviceWorker.getRegistration().then((swReg) => {
  if (!swReg) {
    return Promise.resolve(true)
  }
  return swReg.unregister()
})
```
