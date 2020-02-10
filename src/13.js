/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let numberArr = []

  if(s.length <= 1){
    return map[s]
  }

  for(let i = 0; i < s.length; i++){
    numberArr.push(map[s[i]])
  }

  // 旋转
  numberArr.reverse()

  let number = numberArr[0]

  for(let i = 1; i < numberArr.length; i++){
    if(numberArr[i - 1] / numberArr[i] == 5 || numberArr[i - 1] / numberArr[i] == 10){
      number -= numberArr[i]
    }else{
      number += numberArr[i]
    }
  }

  return number
    
};


export default romanToInt