/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 // 广度优先
var maxDepth = function(root) {
  let maxDeepNum = 1
  let arr = [root]

  if(!root){
    return 0
  }

  while(arr.length){
    let tempArr = []

    for(let i = 0; i < arr.length; i++){
      let item = arr[i]

      item.left && tempArr.push(item.left)
      item.right && tempArr.push(item.right)
    }

    arr = tempArr

    if(tempArr.length > 0){
      maxDeepNum++
    }
  }

  return maxDeepNum
};

// 深度优先
var maxDepth = function(root){
  let nowNode = root
  let returnNode = null
  let maxDeepNum = 1
  let nowDeep = 1

  if(!root){
    return 0
  }

  getDeep(nowNode)

  function getDeep(node){
    // 如果左边右边都存在，那么记录当前节点是最后的一次节点
    if(node.left && node.right){
      returnNode = node.right
    }

    if(node.left || node.right){
      nowDeep++
    }

  }

  return nowDeep
}