/**
 * 快排：分而治之
 * 先选取一个基元pivot,
 * 小于等于pivot分到left，大于pivot则分到right，
 * 再分别对left和right进行快排，
 * 最后concat
 * @param {*} arr
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

const arr = [1, 2, 10, 7, 5, 6, 102, 333, 76];
console.log(quickSort(arr));
