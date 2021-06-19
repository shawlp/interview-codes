/** 数组去重 */
const a = [1, 1, "1", "1"];

/** Set */
// function unique(a) {
//   return [...new Set(a)];
// }

/** filter-indexOf */
// function unique(array) {
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

/** sort-filter */
// function unique(array) {
//   return array
//     .concat()
//     .sort()
//     .filter((item, index) => !index || item !== array[index - 1]);
// }

/** map */
function unique(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
    }
  }
  return Array.from(map.keys());
}

/** includes */
// function unique(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

/** indexOf */
// function unique(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) < 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

console.log(unique(a));
