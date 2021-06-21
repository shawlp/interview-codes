1. 请实现 listToTree 函数，根据 parentId 的关系把数组转换成树形结构，要求时间复杂度不能为 n^2

提示：自己 ID 都大于 parentId

```
// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = listToTree(list, ...);


// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
```

2.

```
class TaskPool {
  // 设计 delayRun() 方法，支持链式操作，注意 delayTime 是间隔时长
  delayRun(delayTime, callback) {
     console.log('register', delayTime, callback.name)
  }
}

const instance = new TaskPool();

instance
  .delayRun(3000, function task1() {
    console.log("run log 1");
  })
  .delayRun(2000, function task2() {
    console.log("run log 2");
  })
  .delayRun(1000, function task3() {
    console.log("run log 3");
  });

setTimeout(() => {
  instance.delayRun(10, function task4() {
    console.log("run log 4");
  });
}, 4000);

// 需要按照如下顺序打印
20:00:16 register 3000 task1
20:00:16 register 2000 task2
20:00:16 register 1000 task3
20:00:19 run log 1
20:00:20 register 10 task4
20:00:21 run log 2
20:00:22 run log 3
20:00:22 run log 4
```

3. 使用 setTimeout 模拟 setInterval

4. js 树形数据递归查询该节点的所有父级节点、查询该节点的所有子节点,根据 id 获取该节点的对象

```
var  data2= [
         {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }];
```

5. stock max profit

6. Quick Sort

7. hooks 防抖

8. 一个数组 arr = [1, 22, 44, 555, 66, ...]，使用一次循环，把最大的两个数找出来（2 个哨兵,不使用 sort 排序）

9. 最长公共子序列的长度
   输出所有的最长公共子序列
   最长公共子串的长度
   输出所有的最长公共子串
