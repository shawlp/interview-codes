/**
 * 把数组打乱
 * @param {*} arr
 */
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - .5);
// }

/**
 * 从最后一个元素开始遍历，然后计算出随机的索引与之兑换，注：Math.floor(Math.random() * len)：生成的随机数在0-(len-1)之间
 * @param {*} arr
 */
function shuffle(arr) {
  let result = JSON.parse(JSON.stringify(arr));
  const len = result.length;
  for (let i = len - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }
  return result;
}

console.log(shuffle([1, 2, 3, 4, 5]));
