//摩尔投票法
var majorityElement = function(nums) {
  let count = 1
  let major = nums[0]
  for(let i =1;i<nums.length;i++){
    const num = nums[i]
    if(num === major){
      count++
    }
    else{
      count--
      if(count==0){
        major = nums[i+1]
      }
    }
  }
  return major
};
console.log(majorityElement([6,5,5]))