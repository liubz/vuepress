// https://juejin.cn/post/7032905194736189477#heading-12
export function throttle(fn, time,  options = {}) {
  const { leading = false, trailing = true } = options
  //该变量用于记录上一次函数的执行事件
  let lastTime = 0
  // 内部的控制是否立即执行的变量
  let isLeading = true
  const _throttle = function () {
    const nowTime = Date.now()
    // console.log(leading , isLeading)
    if (!leading && isLeading) {
      // debugger
      lastTime = nowTime
      isLeading = false
    }

    const remainTime = nowTime - lastTime
    console.log(remainTime, nowTime , lastTime)
    if (remainTime - time >= 0) {
      fn.apply(this, arguments)
      lastTime = nowTime
    }

  }

  return _throttle

}
