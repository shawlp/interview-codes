/**
 * 2个有顺序的哨兵，依次遍历,把这两个值替换成最新的有顺序的值
 * @param {*} arr
 */
function topTwo(arr) {
  let a = Math.min(arr[0], arr[1]),
    b = Math.max(arr[0], arr[1]);
  for (let i = 0; i < arr.length; i++) {
    if (a < arr[i] && arr[i] < b) {
      [a, arr[i]] = [arr[i], a];
    } else if (arr[i] > b) {
      [a, b] = [b, a];
      [b, arr[i]] = [arr[i], b];
    }
  }
  return [a, b];
}

const result = topTwo([1, 44, 77, 888, 99, 110]);
console.log(result);
