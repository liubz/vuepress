# JavaScript 设计模式

## UNIX/LINUX设计准者

1. 小既是美
2. 让每个程序只做好一件事
3. 快速建立原型
4. 舍去高效率而取可移植性
5. 采用纯文本来存储数据
6. 充分利用软件的杠杆效应（软件复用）

### 工厂模式

```js
class Production{
  constructor(nane) {
    this.name
  }
}
function factory(name) {
  return new Production(name)
}
```

### 单例模式

单例模式是一种十分常用却相对简单的设计模式。它是指在一个类只能有一个实例，即使多次实例化该类，也只返回第一次实例化后的实例对象。单例模式不仅能减少不必要的内存开销, 并且在减少全局的函数和变量冲突也具有重要的意义。

es5 方式

```js
var Singleton = function(name) {
  this.name = name;
  //一个标记，用来判断是否已将创建了该类的实例
  this.instance = null;
};
// 提供了一个静态方法，用户可以直接在类上调用
Singleton.getInstance = function(name) {
  // 没有实例化的时候创建一个该类的实例
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  // 已经实例化了，返回第一次实例化对象的引用
  return this.instance;
};

var a = Singleton.getInstance("sven1");
var b = Singleton.getInstance("sven2");
// 指向的是唯一实例化的对象
console.log(a === b);
```

ES6 方式

```js
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  // 构造一个广为人知的接口，供用户对该类进行实例化
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}
```

### MVVM(vue原理)

![avatar](/images/img/mvvm.png)

vue是采用数据劫持配合发布者-订阅者模式的方式，通过Object.definerProperty()来劫持各个属性的setter和getter，在数据变动时，发布消息给依赖收集器，去通知观察者，做出对应的回调函数，去更新视图

MVVM作为绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听model数据变化，通过Compile来解析编译模板指令，最终利用Wathcer搭建起Observer，Compile之间的通信桥梁，达到数据变化 => 视图更新；视图交互变化 => 数据model变更的双向绑定效果
