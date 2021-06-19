/**
 * 判断一条链是否有环
 * 遍历结点，若一直next再次碰到头结点，则是有环的
 * */
const hasCycle = function(head) {
  const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;
};
