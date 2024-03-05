export function debounce(fn, timer) {
  let time = null
  return function (...args) {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn(...args)
    }, timer)
  }
}
