/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  
  for(let i = 0; i < nums.length; i ++){
    let addNum = nums[i]

    if(addNum > max){
      max = addNum
    }

    for(let j = i + 1; j < nums.length; j++){
      addNum = addNum + nums[j]
      
      if(addNum > max){
        max = addNum
      }

    }
  }

  return max
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) == 6)

// export default maxSubArray;