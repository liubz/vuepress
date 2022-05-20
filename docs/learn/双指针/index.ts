// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length -1

  while(left <= right) {
    const mi = Math.floor((left + right)/2)
    const m = nums[mi]
    if (m > target) {
      right = mi - 1
    } else if (m < target) {
      left = mi + 1
    } else {
      return mi
    }
  }

  return left

};
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
function sortedSquares(nums: number[]): number[] {
  const arr = []
  let i = 0
  let j = nums.length - 1
  while(i <= j) {
    const ival = Math.pow(nums[i],2)
    const jval = Math.pow(nums[j], 2)
   if (ival > jval) {
    arr.unshift(ival)
     i++
   } else  {
    arr.unshift(jval)

     j--
   }
  }
  return arr
};

function rotate(nums: number[], k: number): void {
  for (let i = 1; i <= k; i++) {
    const el = nums.pop()
    nums.unshift(el)
  }
};

/**
 Do not return anything, modify nums in-place instead.
 [0,1,0,3,12]
 */
 function moveZeroes(nums: number[]): void {
    let s = 0
    let f = 0
   while(f <= nums.length) {
     // !0
     if (nums[s] !== 0) {
       s ++
     }
     if (nums[f] === 0 ) {
       f++
     }
     [nums[s], nums[f]] = [nums[f], nums[s]]
     s++
     f++
   }
};