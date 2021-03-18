/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let arr = []

  if(!head){
    return true
  }

  while(head){
    let val = head.val

    arr.push(val)

    head = head.next
  }

  if(arr.length % 2 == 1){
    return false
  }

  for(let i = 0; i < arr.length / 2; i++){
    if(arr[i] !== arr[arr.length - i -1]){
      return false
    }
  }

  return true
};