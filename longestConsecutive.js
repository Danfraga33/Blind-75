var longestConsecutive = function(nums) {
	if (!nums || nums.length === 0) {
	  return 0;
	}
	const numSet = new Set(nums);
	let maxLength = 0;
	for (let num of numSet) {
	  if (!numSet.has(num - 1)) {
		 let currentNum = num;
		 let currentLength = 1;
 
		 while (numSet.has(currentNum + 1)) {
			currentNum++
			currentLength++
		 }
		 maxLength = Math.max(maxLength, currentLength);
	  }
	}
	return maxLength;
 };
