/* eslint-disable */
import { parsePath } from './utils.js'
import Dep from './Dep.js'
var uid = 0
export default class Wacther {
  constructor(target, expression, callback) {
    this.id = uid++
    this.target = target
    this.getter = parsePath(expression)
    this.callback = callback
    this.value = this.get()
  }

  update() {
    console.log('更新视图')
    this.run()
  }
  get() {
    Dep.target = this
    const obj = this.target
    let value
    try {
      value = this.getter(obj)
    } finally {
      Dep.target = null
    }
    return value
  }
  run() {
    this.getAndInvoke(this.callback)
  }
  getAndInvoke(cb) {
    const value = this.get()
    if (value !== this.value || typeof value === 'object') {
      const oldValue = this.value
      this.value = value
      cb.call(this.target, value, oldValue)
    }
  }
}
