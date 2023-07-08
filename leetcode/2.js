// https://leetcode.cn/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let carry = 0;
  let current = head;
  let p = l1;
  let q = l2;

  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
};
