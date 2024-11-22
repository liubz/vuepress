# JavaScript设计模式


## 单利模式

```ts
class Sing {
  name: string
  instace: any
  constructor(nane: string) {
    this.name = nane
  }
  getSing(name: string) {
    if (!this.instace) {
      this.instace = new Sing(name)
    }
    return this.instace
  }
}
```

## 观察者

1. 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
2. 优点明显：降低耦合，两者都专注于自身功能；
3. 缺点也很明显：所有观察者都能收到通知，无法过滤筛选；
```js
// 观察者
export class Observer {
  constructor(name) {
    this.name = name
  }

  // 通知发布
  update() {
    console.log(`目标者通知我更新了，我是：${this.name}`)
  }
}
// 观察对象
export class Subject {
  constructor() {
    this.observers = []
  }

  // 添加订阅者
  add(observer) {
    this.observers.push(observer)
  }

  // 删除订阅者
  remove(observer) {
    this.observers = this.observers.filter((e) => e !== observer)
  }

  // 通知
  notify() {
    this.observers.forEach((e) => e.update())
  }
}

// 实例化目标者
let subject = new Subject();
 
// 实例化两个观察者
let obs1 = new Observer('前端');
let obs2 = new Observer('后端');
 
// 向目标者添加观察者
subject.add(obs1);
subject.add(obs2);
 
subject.notify();
```

## 发布订阅模式（Publisher && Subscriber）

1. 发布订阅模式：基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。



```js
// Vue eventBus 实现案例
export class Bus {
  constructor() {
    this.eventStack = {}
  }

  // 发布
  emit(eventName, ...args) {
    if (this.eventStack[eventName]) {
      this.eventStack[eventName].forEach((cb) => {
        cb(...args)
      })
    }
  }

  // 订阅
  on(eventName, cb) {
    if (!this.eventStack[eventName]) {
      this.eventStack[eventName] = []
    }
    this.eventStack[eventName].push(cb)
  }

  // 取消订阅
  off(eventName, cb) {
    if (this.eventStack[eventName]) {
      if (cb) {
        this.eventStack[eventName] = this.eventStack[eventName].filter(
          (el) => el !== cb
        )
      } else {
        Reflect.deleteProperty(this.eventStack, eventName)
      }
    }
  }
}

```