/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  if(x === y){
    return 0
  }

  let long = x > y ? getBinary(x) : getBinary(y)
  let short =  x < y ? getBinary(x) : getBinary(y)
  let num = 0

  for(var i = 0; i < long.length - short.length; i++) {
    short = "0" + short;
  }

  for(let i = 0; i < long.length; i++){
    if(long[i] !== short[i]){
      num++
    }
  }

  return num
};

function getBinary(num){
  var value = parseInt(num).toString(2);
  var l = value.length;
 
  if(l < 4){
    for(var i = 0; i < 4-l; i++) {
      value = "0" + value;
    }
  }

  return value
}