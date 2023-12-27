import { DoublyNode } from './common/index'
import { LinkedList } from './LinkedList'
export class DoublyLinkedList extends LinkedList {
  head: DoublyNode | undefined = undefined
  tail: DoublyNode | undefined
  count = 0

  push(ele: number) {
    const node = new DoublyNode(ele)
    if (this.head === undefined) {
      this.head = node
      this.tail = node
    } else {
      ;(this.tail as DoublyNode).next = node
      node.prev = this.tail
      this.tail = node
    }

    this.count++
  }
}
