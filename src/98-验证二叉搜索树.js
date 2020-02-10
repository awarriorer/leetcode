/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 2,1,3
var isValidBST = function(root) {
  let prev

  const traverse = node => {
    if (!node) {
      return true
    }

    let flag = traverse(node.left)

    if (prev) {
      flag = flag && prev.val < node.val
    }

    prev = node

    return flag && traverse(node.right)
  }

  return traverse(root)
}