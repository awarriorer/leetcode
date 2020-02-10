/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  if(!head)   return null;
  
  var count = 0;
  var p = head;
  
  while(p != null) {
    count++;
    p = p.next;
  }

  p = head;

  if(count == n)  return head.next;
  
  while(count > n + 1) {
    p = p.next;
    count--;
  }

  p.next = p.next.next;
  
  return head;
};