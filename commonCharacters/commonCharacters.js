/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/


const commonChars = (str1, str2) => {
  const arr = [];
  
  for (let i = 0; i < str1.length; i++) {
    if (!(arr.includes(str1[i])) &&
       (str2.includes(str1[i]))) {
    
       arr.push(str1[i]);
    }
  }
  return arr;
}

// ["a", "e", "i", "o", "u"]
console.log(commonChars('acexivou', 'aegihobu'));

// ["a", "b", "c"]
console.log(commonChars('abc', 'acibc'));
