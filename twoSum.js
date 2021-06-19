/**
 * map存储值和索引
 * 再次遍历在map中找到减数，直接返回索引即可
 * @param {*} nums
 * @param {*} target
 */
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const d = target - nums[i];
    if (map[d]) {
      return [i, map[d]];
    }
    return new Error("404 not found");
  }
}

console.log(twoSum([2, 9, 11, 7], 9));
