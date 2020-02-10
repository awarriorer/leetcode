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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  return isSameTree(root.left, root.right);
};

const isSameTree = (s, t) => {
  if (s === null) {
    return t === null;
  }
  if (t === null) {
    return s === null;
  }
  if (s.val !== t.val) {
    return false;
  }
  return isSameTree(s.left, t.right) && isSameTree(s.right, t.left);
};