// function listToTree(list) {
//   return list.filter(e => {
//     let parentId = e.parentId;
//     let newArr = list.filter(ele => {
//       if (ele.id == parentId) {
//         if (!ele.children) {
//           ele.children = [];
//         }
//         ele.children.push(e);
//         return true;
//       }
//     });
//     return newArr.length === 0;
//   });
// }
/**
 * 用空间换时间，降低了算法时间复杂度
 * 使用map先生成以id为key，node为value的对象
 * 再遍历数组：若parentId为0，直接推到数组里去，否则就在map对象里找parent，再插入到parent的children里
 * @param {*} list
 */
function listToTree(list) {
  let res = [];
  const map = list.reduce((res, v) => {
    res[v.id] = v;
    return res;
  }, {});
  for (const item of list) {
    if (item.parentId === 0) {
      res.push(item);
      continue;
    }
    if (item.parentId in map) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}

const nodeList = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 }
];

const result = listToTree(nodeList);
console.log(JSON.stringify(result));

// let a = [
//   {
//     id: 1,
//     name: "部门A",
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: "部门C",
//         parentId: 0,
//         children: [
//           {
//             id: 6,
//             name: "部门D",
//             parentId: 0,
//             children: []
//           }
//         ]
//       },
//       {
//         id: 4,
//         name: "部门D",
//         parentId: 0,
//         children: [{ id: 8, name: "部门H", parentId: 4 }]
//       }
//     ]
//   },
//   {
//     id: 2,
//     name: "部门B",
//     parentId: 0,
//     children: [
//       {
//         id: 5,
//         name: "部门D",
//         parentId: 0,
//         children: []
//       },
//       {
//         id: 7,
//         name: "部门D",
//         parentId: 0,
//         children: []
//       }
//     ]
//   }
// ];
