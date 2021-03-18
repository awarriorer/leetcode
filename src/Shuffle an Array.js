var Solution = function(nums) {
  this.nums = nums
  this.original = nums.slice()
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  this.nums = this.original
  this.original = this.original.slice()
  return this.nums
};
Solution.prototype.random = function(l, r) {
  return  Math.floor(l + (r - l) * Math.random())
}
Solution.prototype.swap = function(l, r) {
 let tmp = this.nums[l]
 this.nums[l] = this.nums[r]
 this.nums[r] = tmp
}
/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let len = this.nums.length,
  res = []
  for(let i = 0; i < len; i ++) {
      let index = this.random(i, len )
      this.swap(index, i)
  }
  return this.nums
  
};