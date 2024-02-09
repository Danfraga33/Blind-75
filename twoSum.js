var twoSum = function(nums, target) {
   // if any two of the num in nums, total target, return the index values
  for(let i = 0; i< nums.length;i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i,j]
      }
    }
  }
 return answer
};
