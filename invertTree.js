/**
 * 反转树：若根为空，则返回空；递归遍历节点：把左子树与右子树对调
 * @param {*} root
 */
const invertTree = root => {
  if (root === null) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
