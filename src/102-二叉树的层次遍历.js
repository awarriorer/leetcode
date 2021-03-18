/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
    return []
  }

  let arr = [[root.val]]
  let runArr = [root]

  while(runArr.length > 0){
    let nextArr = []
    let itemArr = []

    for(let i = 0; i < runArr.length; i++){
      let item = runArr[i]

      if(item.left){
        nextArr.push(item.left)
        itemArr.push(item.left.val)
      }

      if(item.right){
        nextArr.push(item.right)
        itemArr.push(item.right.val)
      }
    }

    if(itemArr.length){
      arr.push(itemArr)
    }

    runArr = nextArr
  }

  return arr
};