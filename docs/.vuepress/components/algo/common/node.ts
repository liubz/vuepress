export class Node {
  value: number
  next: undefined | Node
  constructor(ele: number, next?: Node) {
    this.value = ele
    this.next = next
  }
}

export class DoublyNode extends Node {
  prev: DoublyNode | undefined
  constructor(ele: number, next?: DoublyNode, prev?: DoublyNode) {
    super(ele, next)
    this.prev = prev
  }
}
