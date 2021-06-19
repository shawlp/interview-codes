/**
 * 反转链表：遍历节点，将prev, cur, cur.next的节点交换
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let [prev, cur] = [null, head];
  while (cur) [cur.next, prev, cur] = [prev, cur, cur.next];
  return prev;
};
