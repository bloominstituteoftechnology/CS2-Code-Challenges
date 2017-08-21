/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  const commonChArr = [];
  for (let i = 0; i < str1.length; i++){
    if (!commonChArr.includes(str1[i])){
      if (str2.includes(str1[i])) commonChArr.push(str1[i]);
    }
  }
  return commonChArr;
}

console.log(commonCharacters('apple','bananas'));
