# JavaScript 数据结构和算法

# 数据结构

## 栈(stack)它是一种受限的线性表后进先出

1.  栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的或待删除的元素都保存在栈的
    同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

![avatar](/images/img/stack.png)

代码实现

```js
class Stack {
  // 存储数据
  items = [];
  constructor() {}
  // 进栈：添加新元素到栈顶
  push(ele) {
    this.items.push(ele);
  }
  // 出栈：移除栈顶的元素，同时返回被移除的元素。
  pop() {
    return this.items.pop();
  }
  // 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
  peek() {
    return this.items(this.items.length - 1);
  }
  // 如果栈里没有任何元素就返回true，否则返回false。
  isEmpty() {
    return this.items.length === 0;
  }
  // 移除栈里的所有元素。
  claer() {
    this.items = [];
  }
  // 返回栈里的元素个数。这个方法和数组的length属性很类似。
  size() {
    return this.items.length;
  }
}
```

## 队列数据结构

1.  队列是遵循 FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有序的项。
    队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

队列常用方法

```js
class Queue {
  items = [];
  constructor() {}
  // 向队列尾部添加一个（或多个）新的项。
  enqueue(ele) {
    this.items.push(ele);
  }
  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue() {
    return this.items.shift();
  }
  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
  front() {
    return this.items[0];
  }
  // 如果队列中不包含任何元素，返回true，否则返回false。
  isEmpty() {
    return !this.items.length;
  }
  // 返回队列包含的元素个数，与数组的length属性类似。
  size() {
    return this.items.length;
  }
}
```

优先队列

```js
class QueueElement {
  constructor(ele, priority) {
    this.ele = ele;
    this.priority = priority;
  }
}

class PriorityQueue {
  items = [];
  constructor() {}
  // 向队添加一个（或多个）新的项按照优先级进行排列。优先级大的排在前面 : 9 >8
  enqueue(ele, priority) {
    let node = new QueueElement(ele, priority);
    if (this.items.length === 0) {
      this.items.push(node);
    } else {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.priority < priority) {
          this.items.splice(i, 0, node);
        } else if (i === this.items.length - 1) {
          this.item.push(node);
        }
      }
    }
    // this.items.push(ele)
  }
  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue() {
    return this.items.shift();
  }
  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
  front() {
    return this.items[0];
  }
  // 如果队列中不包含任何元素，返回true，否则返回false。
  isEmpty() {
    return !this.items.length;
  }
  // 返回队列包含的元素个数，与数组的length属性类似。
  size() {
    return this.items.length;
  }
}
```

## 链表数据结构

1.  链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
    元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。下图展
    示了一个链表的结构；
2.  优势：链表数据结构的优势，在删除和插入的时候性能较好，不需要一个连续的空间；
3.  劣势： 通过下标读取数据没有数组性能好；

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  length = 0;
  head = null;

  // 添加
  append(data) {
    if (!data) new Error("data不能为空");
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  // 插入
  insert(positon, data) {
    let newNode = new Node(data);
    let index = 0;
    let current = this.head;
    while (current.next && index < positon - 1) {
      index++;
      current = current.next;
    }
    let insertNode = current.next;
    current.next = newNode;
    newNode.next = insertNode;
    this.length++;
  }
  // 更新
  update(positon, data) {
    if (positon < 0 || positon > this.length - 1) return false;
    let index = 0;
    let current = this.head;
    while (current) {
      if (index === positon) {
        current.data = data;
        return true;
      }
      current = current.next;
      index++;
    }
  }
  // 移除
  remove(position) {
    if (position >= 0 && position < this.length - 1) {
      // 如果下标是0
      if (position === 0) {
        let current = this.head.next;
        this.head = current;
      } else {
        let index = 0;
        let current = this.head;
        while (current.next && index < position - 1) {
          index++;
          current = current.next;
        }
        let removeNode = current.next;
        current.next = removeNode.next;
      }
      this.length--;
    }
  }
  // 没有返回-1有返回下标
  indexOf(data) {
    let index = -1;
    let current = this.head;
    while (current) {
      index++;
      if (current.data === data) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }
  // 查看
  toString() {
    let str = "";
    if (this.head) {
      str += this.head.data;
      let current = this.head;
      while (current.next) {
        current = current.next;
        if (current.data) {
          str += "," + current.data;
        }
      }
    }
    return str;
  }
  // 查看第几个元素
  get(position) {
    if (position < 0 || position > this.length - 1) return false;
    let current = this.head;
    let index = 0;
    while (current) {
      if (index === position) {
        return current.data;
      }
      index++;
    }
  }
  // 是否为空
  isEmpty() {
    return this.length === 0;
  }
  // 包含的个数
  size() {
    return this.length;
  }
}

let linked = new LinkedList();
```
## 集合 （ES6 中的set）

  集合是由一组无序且唯一（即不能重复）的项组成的。这个数据结构使用了与有限集合相同
的数学概念，但应用在计算机科学的数据结构中。 

## 字典 （ES6中的map）

  你已经知道，集合表示一组互不相同的元素（不重复的元素）。在字典中，存储的是[键，值]
对，其中键名是用来查询特定元素的。字典和集合很相似，集合以[值，值]的形式存储元素，字
典则是以[键，值]的形式来存储元素。字典也称作映射。

# 排序算法

<demo-1></demo-1>

https://www.cnblogs.com/AlbertP/p/10847627.html

## 冒泡排序

冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名

![avatar](/images/img/bubbleSort.gif)

```js
function bubbleSort(arr) {
  for (let i = arr.length ; i > 0; i--) {
    for (let j = 0; j < i; j++) {

      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }

    }
  }
  return arr;
}
```
## 选择排序

选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位。

![avatar](/images/img/selectionSort.gif)

```js
function selectionSort (arr) {
  let length = arr.length;
  let temp;
  for (let i = 0; i < length -1; i++) {
   
    let minIndex = i;
    // 找出最小值
    for (let j = i +1 ; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
```
## 插入排序

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。当然，如果你说你打扑克牌摸牌的时候从来不按牌的大小整理牌，那估计这辈子你对插入排序的算法都不会产生任何兴趣了

![avatar](/images/img/1867034-d1537e355abdd298.gif)

```js
function insertionSort (arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let j = i - 1;
    let temp = arr[i]
    while( arr[j] > temp && j >= 0)  {
      arr[j + 1] = arr[j]
      j --;
    } 
    arr[j + 1 ] = temp
  }
  return arr;
}
```

## 希尔排序

- 希尔排序是插入排序的更高效的实现方法。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。**（这样有利于减少元素交换的次数）**

```js
function shellSortSort (arr) {
  let length = arr.length;
  let gap  = Math.floor(length/2);
  let temp;
  while (gap > 0) {

    for (let i = gap; i < length; i++) {
      let j = i -gap;
      temp = arr[i] 
      while(arr[j] > temp  && j >= 0) {
        arr[j + gap] = arr[j]
        j -= gap;
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap/2);
  }
  return arr;
}
```

## 快速排序

快速排序是一种分而治之思想在排序算法上的典型应用。本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。
快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高! 它是处理大数据最快的排序算法之一了。

```js
function quickSort(arr) {
  quick(arr, 0, arr.length - 1);
  return arr;
}
// 从数组中选择中间一项作为主元
function position(arr, left, right) {
  // 选取中间值作为
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(arr, left, right) {
  if (arr.length > 1) {
    // 将数组一分为二
    let index = position(arr, left, right);
    if (left < index - 1) {
      quick(arr, left, index - 1);
      if (index < right) {
        quick(arr, index, right);
      }
    }
  }
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

quickSort(arr);

```

## 归并排序

归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。

![avatar](/images/img/1867034-18c70f637b5c01c2.gif)

```js
function mergeSort ( arr ) {
  arr = mergeSortRec(arr);
  return arr;
}

function mergeSortRec (arr) {
  let length = arr.length;
  if (length === 1) return arr;
  let mid = Math.floor(length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);
  return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge (left, right) {
  let result = [];
  let il = 0;
  let ir = 0;

  while(il < left.length && ir < right.length ) {
    if (left[il] < right[ir]) {
      result.push(left[il]);
      il ++;
    } else {
      result.push(right[ir]);
      ir++;
    }
  }
  while(il < left.length) {
    result.push(left[il]);
    il++;
  }
  while(ir < right.length) {
    result.push(right[ir]);
    ir++;
  }
  return result;
}
```

## 快速排序
<!-- 
归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。 -->

![avatar](/images/img/1867034-cd65e35d7dce5045.gif)

```js

```