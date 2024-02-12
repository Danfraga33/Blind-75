var productExceptSelf = function(nums) {
const n = nums.length

  let leftArr = new Array(nums.length).fill(0)
  leftArr[0] = 1
  let rightArr = new Array(nums.length).fill(0)
  rightArr[n-1] = 1
  
  
  for(let i = 1; i < n; i++) {
    leftArr[i] = nums[i-1] * leftArr[i-1]
  }
  
  for(let i = n-2; i >= 0; i--) {
    rightArr[i] =  nums[i+1] * rightArr[i+1]
  }
  const answer =[]
  for(let i=0; i < n; i++) {
  nums[i] = leftArr[i] * rightArr[i]
  }

return nums //[ [ 1, 1, 2, 6 ], [ 24, 12, 4, 1 ] ]
  
  
};
