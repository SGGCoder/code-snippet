var threeSum = function (nums) {
  if (!nums || nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i <= nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if(i&&nums[i] ===nums[i-1])continue
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while(j<k && nums[j]===nums[j+1]){
          j++
        }
        while(j<k&&nums[k]===nums[k-1]){
          k--
        }
        j++;
        k--
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res
}
