# chrome 插件


### 通信

```js
// newtab.js
const res = await chrome.runtime.sendMessage({ type: 'getBookmarks', other: '123' });
console.log(res);


// 注册监听
// background.js
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
   
   // request 就是sendMessage发送过来的数据 { type: 'getBookmarks', other: '123' }
   
  chrome.bookmarks.getTree(tree => {
    console.log('1234', tree);
    // 返回书签
    sendResponse(tree)
  });


});
```
### content

  - 可以直接操作、获取页面页面中dom，也可以监听页面事件
```js

```
