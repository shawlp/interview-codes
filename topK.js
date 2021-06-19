const topK = (nums, k) => {
  nums.sort((a, b) => a - b);
  return nums[k - 1];
};

console.log(topK([1, 2, 5, 4, 3], 5));
