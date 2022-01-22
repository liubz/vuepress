/* eslint-disable */
var uid = 0
export default class Dep {
  constructor() {
    console.log('Dep')
    this.id = uid++
    // 用数组存储自己的订阅者
    // 存放watcher的实例
    this.subs = []
  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }
  // 添加依赖
  depend() {
    // Dep.target就是一个我们自己制定的全局的位置
    if (Dep.target) {
      console.log('Dep.target', Dep.target)
      this.addSub(Dep.target)
    }
  }
  // 通知更新
  notify() {
    // 浅克隆一份
    const subs = this.subs.slice()
    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}
