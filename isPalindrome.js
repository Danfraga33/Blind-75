var isPalindrome = function(s) {
  const allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const comparedCode = s.toLowerCase().split('').filter(char => allowedCharacters.includes(char))
  return comparedCode.join('') === comparedCode.reverse().join('')
};
