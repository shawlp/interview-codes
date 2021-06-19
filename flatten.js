/** 数组拍平 */
const a = [1, [2, [3, 4, [5, 6]]], 7, [8, 9]];

// function flatten(array, d = 1) {
//   return d > 0
//     ? array.reduce((prev, curr) => {
//         return prev.concat(Array.isArray(curr) ? flatten(curr, d - 1) : curr);
//       }, [])
//     : array.slice();
// }

// function flatten(array) {
//   return JSON.parse(
//     JSON.stringify(array)
//       .replace(/\[|\]/, "")
//       .split(",")
//   );
// }

let result = [];
function flatten(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatten(array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flatten(a));
