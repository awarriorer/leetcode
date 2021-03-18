/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  nums.sort((a, b) => {
    return a-b
  })

  let res = 0;
  for(let i=0; i <= nums[nums.length-1]; i++){
    if(i == nums[i]){
      res++
    }else{
      return res
    }
  }
  return res
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))