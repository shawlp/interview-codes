/**
 * 根据length把数组分成几组
 * @param {*} array
 * @param {*} length
 */
function chunk(array, length = 1) {
  let result = [];
  const s = Math.ceil(array.length / length);
  for (let i = 0; i < s; i++) {
    result.push([...array.slice(length * i, length * (i + 1))]);
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5], 3));
