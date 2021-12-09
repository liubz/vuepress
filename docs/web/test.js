/* eslint-disable node/no-callback-literal */
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
