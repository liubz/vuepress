import{_ as a,c as t,o as l,ag as i}from"./chunks/framework.BPw0-pHp.js";const p=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[],"relativePath":"web/HTTP.md","filePath":"web/HTTP.md"}'),r={name:"web/HTTP.md"};function o(T,e,n,h,d,P){return l(),t("div",null,e[0]||(e[0]=[i('<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。。 HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。</p><h2 id="http-工作原理" tabindex="-1">HTTP 工作原理 <a class="header-anchor" href="#http-工作原理" aria-label="Permalink to &quot;HTTP 工作原理&quot;">​</a></h2><p>HTTP协议工作于客户端-服务端架构上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。</p><p>Web服务器有：Apache服务器，IIS服务器（Internet Information Services）等。</p><p>Web服务器根据接收到的请求后，向客户端发送响应信息。</p><h3 id="http三点注意事项" tabindex="-1">HTTP三点注意事项： <a class="header-anchor" href="#http三点注意事项" aria-label="Permalink to &quot;HTTP三点注意事项：&quot;">​</a></h3><ul><li>HTTP是无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。</li><li>HTTP是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过HTTP发送。客户端以及服务器指定使用适合的MIME-type内容类型。</li><li>HTTP是无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。</li></ul><h2 id="http-http状态码" tabindex="-1">HTTP HTTP状态码 <a class="header-anchor" href="#http-http状态码" aria-label="Permalink to &quot;HTTP HTTP状态码&quot;">​</a></h2><ol><li>2XX成功</li></ol><ul><li>200 OK 表示从客户端发来的请求在服务器端被正常处理了</li><li>204 No Content该状态码代表服务器接收的请求已成功处理，但在返回的响应报文中不含实体的主体部分.比如，当从浏览器发出请求处理后，返回204响应，那么浏览器显示的页面不发生更新。</li></ul><ol start="2"><li>3XX重定向</li></ol><ul><li>302 Found临时性重定向。该状态码表示请求的资源已被分配了新的URI，希望用户（本次）能使用新的URI访问。</li><li>303 See Other该状态码表示由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源。</li><li>304 Not Modified服务器端资源未改变，可直接使用客户端未过期的缓存</li><li>307 Temporary Redirect临时重定向。该状态码与302 Found有着相同的含义。尽管302标准禁止POST变换成GET，但实际使用时大家并不遵守。307会遵照浏览器标准，不会从POST变成GET。但是，对于处理响应时的行为，每种浏览器有可能出现不同的情况。</li></ul><ol start="3"><li>4XX客户端错误</li></ol><ul><li>400 Bad Request该状态码表示请求报文中存在语法错误。当错误发生时，需修改请求的内容后再次发送请求。另外，浏览器会像200 OK一样对待该状态码。</li><li>403 Forbidden该状态码表明对请求资源的访问被服务器拒绝了。服务器端没有必要给出拒绝的详细理由，但如果想作说明的话，可以在实体的主体部分对原因进行描述，这样就能让用户看到了。</li><li>404 Not Found该状态码表明服务器上无法找到请求的资源。除此之外，也可以在服务器端拒绝请求且不想说明理由时使用。</li></ul><ol start="4"><li>5XX服务器错误</li></ol><ul><li>500 Internal Server Error该状态码表明服务器端在执行请求时发生了错误。也有可能是Web应用存在的bug或某些临时的故障。</li><li>503 Service Unavailable该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入Retry-After首部字段再返回给客户端。</li></ul><h2 id="同源策略" tabindex="-1">同源策略 <a class="header-anchor" href="#同源策略" aria-label="Permalink to &quot;同源策略&quot;">​</a></h2><p>指的是浏览器对不同源的脚本或者文本的访问方式进行的限制。比如源a的js不能读取或设置引入的源b的元素属性。</p>',20)]))}const u=a(r,[["render",o]]);export{p as __pageData,u as default};
