/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let resultArr = []

  for(let i = 1; i <= numRows; i++){
    getRow(i, resultArr)
  }

  return resultArr
};


function getRow(num, originArr){
  if(num < 3){
    originArr.push((new Array(num)).fill(1))

    return originArr
  }

  let lastArr = originArr[originArr.length -1]
  let arr = [1]

  for(let i = 0; i < lastArr.length - 1; i++){
    arr.push(lastArr[i] + lastArr[i + 1])
  }

  arr.push(1)

  originArr.push(arr)
}