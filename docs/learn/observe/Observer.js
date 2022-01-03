/* eslint-disable */
import {def} from './utils.js'
import defineReactive from './defineReactive.js'
import {arrayMethods} from './array.js'
import observe from './observe.js';
import Dep from './Dep.js'
// 观察者类
export default class Observer{
  constructor(value) {
    console.log('Observer构造器', value)
    // 给时间
    // 每一个Observer都有一个Dep实例
    this.dep = new Dep()
    def(value, '__ob__', this, false);
    if (Array.isArray(value)) {
      // 如果是数组，要修改原型上的方法
      Object.setPrototypeOf(value, arrayMethods)
      this.observeArray(value);
    } else {
      this.walk(value)
    }
  }
  // 遍历
  walk(value) {
    for (const key in value) {
      defineReactive(value, key)
    }
  }
  // 数组的特殊遍历
  observeArray(array) {
    for (let i = 0; i < array.length; i++) {
      observe(array[i])
    }
  }
}
