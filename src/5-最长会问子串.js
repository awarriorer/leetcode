/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length <= 1){
    return s
  }

  let res = s[0]

  for(let i = 0; i < s.length; i++){
    let nowKey = s[i]
    let sameIndex = s.indexOf(nowKey, i + 1)

    if(sameIndex !== -1){
      let str = s.slice(i, sameIndex + 1)
      let reverseStr= str.split('').reverse().join('')

      if(str === reverseStr && str.length > res.length){
        res = str
      }
    }
    
    // 提前截流
    if(res.length > s.length - i){
      break
    }
  }


  return res
};

console.log(longestPalindrome('cbbd'))