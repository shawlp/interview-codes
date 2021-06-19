const treeNode = [
  {
    id: 1,
    label: "a",
    children: [
      {
        id: 2,
        label: "b",
        children: [
          {
            id: 3,
            label: "c",
            children: null
          },
          {
            id: 4,
            label: "e",
            children: null
          }
        ]
      },
      {
        id: 6,
        label: "e",
        children: [
          {
            id: 5,
            label: "f",
            children: null
          }
        ]
      }
    ]
  }
];

/** 根据id获取该节点的所有父节点的对象 */
function getParentById(list, id) {
  for (let i in list) {
    if (list[i].id === id) {
      return [list[i]];
    }
    if (list[i].children) {
      let node = getParentById(list[i].children, id);
      if (node !== undefined) {
        return node.concat(list[i]);
      }
    }
  }
}

function getNodeById(list, id) {
  for (let i in list) {
    if (list[i].id == id) {
      return [list[i]];
    }
    if (list[i].children) {
      let node = getParentById(list[i].children, id);
      if (node !== undefined) {
        return node;
      }
    }
  }
}

console.log("getNodeById", getNodeById(treeNode, 5));
