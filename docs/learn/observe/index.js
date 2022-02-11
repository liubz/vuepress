/* eslint-disable */
import observe from './observe.js'
import Watcher from './Watcher.js'
let obj = {
  a: {
    c: 1,
  },
  b: {
    x: 2,
  },
}

const vm = observe(obj)
new Watcher(obj, 'a.c', (val, oldVal) =>{
  console.log('监听', val, oldVal)
  console.log(vm)
})
obj.a.c = 2
// obj.a.c = 3
