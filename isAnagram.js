var isAnagram = function(s, t) {
    // Split into an arr
    const firstWord = s.split('').sort()
    const secondWord = t.split('').sort()
  // Sort Arrays
    // console.log(secondWord)
  
   if (firstWord.length !== secondWord.length) {
        return false;
    }
  
    for(let i = 0; i < firstWord.length;i++) {
      if(firstWord[i] !== secondWord[i] ){
    return false       
      }
    }
  return true
}
