import{_ as e,c as t,o as r,ag as i}from"./chunks/framework.BPw0-pHp.js";const _=JSON.parse('{"title":"JavaScript 内存优化","description":"","frontmatter":{},"headers":[],"relativePath":"web/JavaScript内存优化.md","filePath":"web/JavaScript内存优化.md"}'),o={name:"web/JavaScript内存优化.md"};function l(c,a,n,h,s,d){return r(),t("div",null,a[0]||(a[0]=[i('<h1 id="javascript-内存优化" tabindex="-1">JavaScript 内存优化 <a class="header-anchor" href="#javascript-内存优化" aria-label="Permalink to &quot;JavaScript 内存优化&quot;">​</a></h1><h2 id="gc-算法" tabindex="-1">GC 算法 <a class="header-anchor" href="#gc-算法" aria-label="Permalink to &quot;GC 算法&quot;">​</a></h2><h3 id="引用记数" tabindex="-1">引用记数 <a class="header-anchor" href="#引用记数" aria-label="Permalink to &quot;引用记数&quot;">​</a></h3><p>1、引用记数原理：在作用域内变量被使用，引用次数加1，使用一次引用减一，引用次数为0回收变量内存。</p><p>2、优点：减少程序卡顿，及时回收内存 3、缺点：每次使用都需要改变变量的引用，比较消耗性能。 不能回收循环引用变量。</p><h3 id="标记清除" tabindex="-1">标记清除 <a class="header-anchor" href="#标记清除" aria-label="Permalink to &quot;标记清除&quot;">​</a></h3><p>1、清除标记原理: 遍历顶层作用域，可访问的变量添加标记。 2、优点： 可解决循环引用问题 3、缺点: 内存地址不连续</p><h3 id="标记整理" tabindex="-1">标记整理 <a class="header-anchor" href="#标记整理" aria-label="Permalink to &quot;标记整理&quot;">​</a></h3><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><ol><li>Memlab 是一款 E2E 测试和分析框架，用于发现 JavaScript 内存泄漏和优化机会。</li></ol>',10)]))}const u=e(o,[["render",l]]);export{_ as __pageData,u as default};
