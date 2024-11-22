# JavaScript 设计模式

## 单例模式

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
