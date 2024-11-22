# BOM

- 作者：郭东东
- [链接：](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)
- 来源：掘金


## 实现跨页面通讯
 CSS 伪类（例如：:hover）
查询某些属性或调用某些方法

clientWidth、clientHeight、clientTop、clientLeft
offsetWidth、offsetHeight、offsetTop、offsetLeft
scrollWidth、scrollHeight、scrollTop、scrollLeft
getComputedStyle()
getBoundingClientRect()
scrollTo()



- postMessage
  1. postMessage(data,origin)方法接受两个参数
  - data:要传递的数据，
    html5 规范中提到该参数可以是 JavaScript 的任意基本类型或可复制的对象，然而并不是所有浏览器都做到了这点儿，部分浏览器只能处理字符串参数，所以我们在传递参数的时候需要使用 JSON.stringify()方法对对象参数序列化，在低版本 IE 中引用 json2.js 可以实现类似效果。
  2. origin：字符串参数，指明目标窗口的源
  - 协议+主机+端口号[+URL]，URL 会被忽略，所以可以不写，这个参数是为了安全考虑，someWindow.postMessage()方法只会在 someWindow 所在的源(url 的 protocol, host, port)和指定源一致时才会成功触发 message event，当然如果愿意也可以将参数设置为"\*"，someWindow 可以在任意源，如果要指定和当前窗口同源的话设置为"/

```js

postMessage(data,origin)方法接受两个参数
demo

a.html
<iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
<script>
    var iframe = document.getElementById('iframe');
    iframe.onload = function() {
        var data = {
            name: 'aym'
        };
        // 向domain2传送跨域数据
        iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
    };

    // 接受domain2返回数据
    window.addEventListener('message', function(e) {
        alert('data from domain2 ---> ' + e.data);
    }, false);
</script>

b.html  与a.html不同源

<script>
    // 接收domain1的数据
    window.addEventListener('message', function(e) {
        alert('data from domain1 ---> ' + e.data);

        var data = JSON.parse(e.data);
        if (data) {
            data.number = 16;

            // 处理后再发回domain1
            window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com');
        }
    }, false);
</script>


```

## 从输入URL到页面加载发生了什么
相关文章：[ 前端经典面试题: 从输入URL到页面加载发生了什么](https://www.jianshu.com/p/e06e86ef2595)
1. DNS解析

2. TCP连接

3. 发送HTTP请求

4. 服务器处理请求并返回HTTP报文

5. 浏览器解析渲染页面
- HTML parser --> DOM Tree
  - 标记化算法，进行元素状态的标记
  - dom 树构建
- CSS parser --> Style Tree
  - 解析 css 代码，生成样式树
- attachment --> Render Tree
  - 结合 dom树 与 style树，生成渲染树
- layout: 布局
- GPU painting: 像素绘制页面

6. 连接结束

##  重绘与回流

 当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中，有两种类型的操作，即重绘与回流。

### 重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 损耗较少

### 回流(reflow): 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:

- 页面初次渲染
- 浏览器窗口大小改变
- 元素尺寸、位置、内容发生改变
- 元素字体大小变化
- 添加或者删除可见的 dom 元素
- 激活 CSS 伪类（例如：:hover）
- 查询某些属性或调用某些方法
  - clientWidth、clientHeight、clientTop、clientLeft
  - offsetWidth、offsetHeight、offsetTop、offsetLeft
  - scrollWidth、scrollHeight、scrollTop、scrollLeft
  - getComputedStyle()
  - getBoundingClientRect()
  - scrollTo()

**回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高