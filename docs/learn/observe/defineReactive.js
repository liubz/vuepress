/* eslint-disable */
import observe from './observe.js'
import Wacther from './Watcher.js'
import Dep from './Dep.js'
export default function defineReactive(object, key, val) {
  const dep = new Dep()
  if (arguments.length === 2) {
    val = object[key]
  }
  let childob = observe(val)
  // console.log(object, key, val)
  Object.defineProperty(object, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend()
        if (childob) {
          childob.dep.depend()
        }
      }
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      // 设置了新值，需要重新observe
      childob = observe(val)
      // 发布订阅模式

      dep.notify()
    },
  })
}
