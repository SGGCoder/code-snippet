var firstMissingPositive = function (nums) {
  if (!nums||!nums.length) return 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i]>300 ) continue;
    if (nums[i] - 1 != i) {
      swap(nums, i, nums[i] - 1);
      if (nums[i] === nums[nums[i] - 1]) {
        continue;
      } else {
        i--;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      return i + 1;
    }
  }
  return nums.length + 1;
};
function swap(nums, a, b) {
  const tp = nums[a];
  nums[a] = nums[b];
  nums[b] = tp;
}
console.log(firstMissingPositive([1]));
