/* eslint-disable */
export const arrayMethods = Object.create(Array.prototype)
import { def } from './utils.js'
const arrMethods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
]

arrMethods.forEach((method) => {
  const oldMethod = arrayMethods[method]

  // const newMethod = function(...args){
  //   oldMethod.apply(this, args)
  // }
  def(
    arrayMethods,
    method,
    function () {
      // 把数组的身躯的__ob__取出来，__ob__已经被添加
      const ob = this.__ob__
      const inserted = []
      switch (key) {
        case 'push':
        case 'unshift':
          inserted = arguments
          break
        case 'splice':
          inserted = [...arguments].slice(2)
          break
        default:
          break
      }
      if (inserted) {
        ob.observeArray(inserted)
      }
      ob.dep.notify()
      return oldMethod.apply(this, args)
    },
    false
  )
})
