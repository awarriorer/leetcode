/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let res = false
  let run = true

  if(n == 1){
    return true
  }

  while(run){
    n = n / 3

    if(n == 1){
      res = true
      run = false

      break
    }

    if(n < 3 && n != 1){
      run = false

      break
    }
  }

  return res
};


export default isPowerOfThree