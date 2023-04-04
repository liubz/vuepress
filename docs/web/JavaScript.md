# JavaScript

- [JavaScript](#javascript)
  - [堆(heap)与栈(stack)](#堆heap与栈stack)
    - [1. heap](#1-heap)
    - [2. stack](#2-stack)
  - [EventLoop](#eventloop)
    - [1. 基础知识](#1-基础知识)
    - [2.js 中的异步操作](#2js-中的异步操作)
    - [3.同步任务 or 异步任务](#3同步任务-or-异步任务)
    - [4.宏任务 or 微任务](#4宏任务-or-微任务)
    - [5. Event Loop 事件循环](#5-event-loop-事件循环)
    - [相关文章](#相关文章)
  - [预编译](#预编译)
  - [作用域链](#作用域链)
  - [闭包](#闭包)
  - [可选链操作符（?.）](#可选链操作符)
  - [空值合并运算符（??）](#空值合并运算符)
  - [字符串解析为DOM节点](#字符串解析为dom节点)


## 堆(heap)与栈(stack)

### 1. heap

heap 是没有结构的，数据可以任意存放。heap 用于复杂数据类型（引用类型）分配空间，例如数组对象、object 对象。

### 2. stack

stack 是有结构的，每个区块按照一定次序存放（后进先出），stack 中主要存放一些基本类型的变量和对象的引用，存在栈中的数据大小与生存期必须是确定的。可以明确知道每个区块的大小，因此，stack 的寻址速度要快于 heap。

## EventLoop

### 1. 基础知识

- js 作为浏览器脚本语言，它的主要用途是与用户互动，以及操作 DOM，因此 js 是单线程，也避免了同时操作同一个 DOM 的矛盾问题；
- 为了利用多核 CPU 的计算能力，H5 的 Web Worker 实现的“多线程”实际上指的是“多子线程”，完全受控于主线程，且不允许操作 DOM；
- js 引擎存在 monitoring process 进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去 Event Queue 那里检查是否有等待被调用的函数。这个过程是循环不断的，所以整个的这种运行机制又称为 Event Loop（事件循环）
- 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）；
- 如果在微任务执行期间微任务队列加入了新的微任务，会将新的微任务加入队列尾部，之后也会被执行；

### 2.js 中的异步操作

- setTimeOut
- setInterval
- ajax
- promise
- I/O

### 3.同步任务 or 异步任务

- 同步任务(synchronous)：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
- 异步任务(asynchronous)：不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行

### 4.宏任务 or 微任务

这里需要注意的是 new Promise 是会进入到主线程中立刻执行，而 promise.then 则属于微任务

- 宏任务(macro-task)：整体代码 script、setTimeOut、setInterval
- 微任务(mincro-task)：promise.then、promise.nextTick(node)

### 5. Event Loop 事件循环

![avatar](/images/img/4820992-82913323252fde95.png)

- 作者：StarryLake
- 链接：[js 运行机制详解（Event Loop）](https://www.jianshu.com/p/e06e86ef2595)
- 来源：简书

### 相关文章

- ssssyoki《这一次，彻底弄懂 JavaScript 执行机制》
  https://juejin.im/post/59e85eebf265da430d571f89#heading-9

- js 运行机制详解（Event Loop）
  https://www.jianshu.com/p/e06e86ef2595

- 阮一峰《JavaScript 运行机制详解：再谈 Event Loop》
  http://www.ruanyifeng.com/blog/2014/10/event-loop.html

## 预编译

1. 创建AO(Activation Object || 执行期上下文)对象
2. 找形参和变量声明，将变量声明和形参名作为AO的属性名，值为undefined
3. 将实参值和形参统一
4. 在函数体里面找函数声明，赋值予函数体

```js
function fn(a) {
  console.log(a)
  var a = 123
  console.log(a)
  function a () {}
  var b = function() {}
  console.log(b)
  function d () {}
}
fn(1)
/*
预编过程
1.创建AO对象
AO{

}
2.找形参和变量声明，将变量声明和形参名作为AO的属性名，值为undefined
AO{
  a: undefined,
  b: undefined
}
3.将实参值和形参统一
AO{
  a: 1,
  b:function b() {}
}
4. 在函数体里面找函数声明，赋值予函数体
AO{
  a: function a {},
  b:function b() {},
  d: function d {}
}
5. 代码执行
*/
```

## 作用域链

1. [[scope]]: 每个JavaScript函数都是一个对象，对象中有些属性我们是可以访问的，但有些不可以，这些属性仅供JavaScript引擎存取，[[scope]]就是其中一个。[[scope]]指的就是我们所说的作用域，其中储存了运行期上下文的集合。
2. 作用域链： [[scope]]中所存储的执行期上下文的集合，这个集合呈链式链接，我们把这种链式链接叫做作用域链。
3. 变量查找：从作用域链的顶端依次往下查找。

示例

```js
function a () {
  function b() {
    var b = 234
  }
  b();
}
var glob = 100;
a();
/*
a函数 定义 a.[[scope]] --> 0: GO {}
a函数 运行 a.[[scope]] --> 0: AO {} (a的A0)
                          1: GO {}
b函数 定义 b.[[scope]] --> 0: AO {} (a的A0)
                          1: GO {}
b函数 运行 b.[[scope]] --> 0: AO {} (b的A0)
                          1: AO {} (a的A0)
                          2: GO {}
*/
```

图解
a 函数被定义时的作用域链

![avatar](/images/img/scope-a-defined.png)

a 函数执行时的作用域链

![avatar](/images/img/scope-a-doing.png)

b 函数被定义时的作用域链

![avatar](/images/img/scope-b-defined.png)

b 函数执行时的作用域链

![avatar](/images/img/scope-b-doing.png)

## 闭包

1. 当内部函数被保存到外部时，将会产生闭包。
2. 缺点：闭包会导致原有作用域链不释放，造成内存泄漏。
3. 优点： 实现私有变量，可以做缓存，可以模块化开发，避免全局变量的污染

```js
function a () {
 var temp = 100;
 function b () {
   console.log(temp)
 }
 return b;
}
var dome = a();
dome();

/*
由于a函数执行把b函数保存到了函数的外部，b函数的作用域链中还保存这a函数的执行时生成的作用域链，导致a函数执行完内存没有得到释放。
*/
```
## 可选链操作符（?.）

[MDN介绍：可选链操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```js
const animal = {
    cat: {
        name: 'kitty',
        color: 'black'
    },
    dog: {
        name: 'doggie'
    }
}
// 当你需要访问一个嵌套多层对象的某个深层级的属性，但是又不能保证哪个属性是一定存在的，那么我们可能需要进行如下判断：
const catName = animal && animal.cat && animal.cat.name
// 使用可选链操作符（?.），我们可以这样：
const catName = animal?.cat?.name;
```

## 空值合并运算符（??）

[MDN介绍：空值合并运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
```js
console.log(null ?? 'default string'); // default string
console.log(0 ?? 'default string')     // 0
console.log(1 ?? 'default string')     // 1
console.log(false ?? 'default string') // false
console.log(true ?? 'default string')  // true
console.log('' ?? 'default string')    // ''
console.log('哈哈' ?? 'default string')    // '哈哈'
```

## 字符串解析为DOM节点
```js
const parser = new DOMParser();
const dockHtml = parser.parseFromString(html, 'text/html')
```
