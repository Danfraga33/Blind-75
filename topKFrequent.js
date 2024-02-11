var topKFrequent = function(nums, k) {
   // Create count hashtable
 // Hashmap containing keys of each number within nums and count of each key.
   const count = {}
   
   // Count Function
   for(const num in nums) {
     // Make key variable
     const key = nums[num]
     // if the hashtable has the key, add one to the count
     if(count[key]) {
       count[key] +=1
     } else {
       // if it doesnt, 
       count[key] = 1
     }
   }
 // Find keys with highest count.
 const countEntries = Object.entries(count)
 console.log(countEntries)
 // a and b are individual elements (key-value pairs) within the array countArray.
 // a[1] & b[1] because in the array. the send items (sort diretly modifies the arr)
 countEntries.sort((a, b) => b[1] - a[1]);
 // slice does not directly modifiy.
 const answerBeforeMap = countEntries.slice(0, k)
 
 const answer = answerBeforeMap.map(el => {
   return el[0]
 })
 return answer
 }
