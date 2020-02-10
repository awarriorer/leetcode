/**
 * @param {number} n
 * @return {string}
 * 很容易看懂的啊，每一项都是在描述上一项序列，例如11的意思是1个1（11的上一项不就是1吗），以此类推
 */
var countAndSay = function(n) {
  let pre = '1'
  for (let i = 1; i < n; i ++) {
    pre = pre.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
  }
  return pre
};

export default countAndSay;