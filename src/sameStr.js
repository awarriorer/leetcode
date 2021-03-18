/**
 * @Name: 
 * @Description: 
 * @Author: 杨豫
 * @Date: 2020-09-28 17:32:11
**/
function getSameStr(strA, strB) {
  let nowStr = ''
  let lastSameIndex = -1
  let catchArr = []

  for (let i = 0; i < strA.length; i++) {
    let nowKey = strA[i]
    let sameIndex = strB.indexOf(nowKey)

    // 存在
    if (sameIndex > -1) {
      // 判断连续
      if (lastSameIndex !== -1) {
        if (sameIndex - lastSameIndex === 1) {
          nowStr += nowKey
        } else {
          nowStr = nowKey
        }
      } else {
        nowStr = nowKey
      }
      lastSameIndex = sameIndex
    } else {
      //  不存在
      nowStr && catchArr.push(nowStr)
      lastSameIndex = -1
      nowStr = ''
    }
  }

  nowStr && catchArr.push(nowStr)

  return catchArr
}

console.log(getSameStr('12345,45', '45'))