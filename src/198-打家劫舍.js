/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let nowRes = 0, lastRes = 0;
  for(let i = 0; i < nums.length; i++) {
      let temp = lastRes;
      lastRes = nowRes;
      nowRes = Math.max(temp + nums[i], nowRes);
  }
  return nowRes;
};

// export default rob