``` js
// Stack(栈)
// 栈的特点，后进先出 frist in last out
class Stack {
  items = []
  // 进栈
  push(item) {
    this.items.push(item)
  }
  // 出栈
  pop() {
    this.items.pop()
  }
  // 查看栈定元素
  peek() {
    return this.items[0]
  }
  // 查看栈大小
  size() {
    return this.items.length
  }
  // 是否为空
  isEmpty() {
    return !this.items.length
  }
  // 清空
  clear() {
    this.items = []
  }
}
```
