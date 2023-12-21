export class Node {
  value: number
  next: undefined | Node
  constructor(ele: number) {
    this.value = ele
    this.next = undefined
  }
}
