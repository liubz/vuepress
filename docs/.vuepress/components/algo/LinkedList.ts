import { eq } from 'lodash-es'
import { Node } from './common'
export class LinkedList {
  head: undefined | Node = undefined
  count = 0

  push(ele: number): void {
    const node = new Node(ele)
    if (this.head === undefined) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== undefined) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  insert(ele: number, index: number): boolean {
    if (index < this.count && index >= 0) {
      const node = new Node(ele)
      if (index === 0) {
        node.next = this.head
        this.head = node
      } else {
        const pre = this.getElementAt(index - 1) as Node
        const current = pre.next

        node.next = current?.next
        pre.next = node
      }
      return true
    }
    return false
  }

  getElementAt(index: number): Node | undefined {
    if (index < this.count && index >= 0) {
      let node = this.head
      for (let i = 0; i < index; i++) {
        node = node?.next
      }
      return node
    }
    return undefined
  }

  remove(ele: number): number | undefined {
    const index = this.indexOf(ele)
    return this.removeAt(index)
  }

  indexOf(ele: number): number {
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (eq(current?.value, ele)) return i
      current = current?.next
    }
    return -1
  }

  removeAt(index: number): number | undefined {
    if (index < this.count && index >= 0) {
      let current = this.head
      if (index === 0) {
        this.head = current?.next
      } else {
        // let pre: undefined | Node
        const pre = this.getElementAt(index - 1) as Node
        current = pre?.next
        pre.next = current?.next
        // pre.next = current?.next
        // pre = node
        // node = node?.next
        // for (let i = 0; i < index; i++) {
        //   pre = current
        //   current = current?.next
        // }

        // ;(pre as Node).next = current?.next
      }
      this.count--
      return current?.value
    }
    return undefined
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  size(): number {
    return this.count
  }

  toString(): string {
    if (this.head === undefined) {
      return ''
    }
    let str = `${this.head.value}`
    let current = this.head.next
    for (let i = 1; i < this.count && current; i++) {
      str = `${str},${current.value}`
      current = current.next
    }
    return str
  }
}
