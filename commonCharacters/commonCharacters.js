/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/
const test1 = 'acexivj oujdf';
const test2 = 'aeg ihobujj';

const commonCharacters = (str1, str2) => {
  const seen = {};
  let common = '';
  const matches = str1.match(new RegExp('(['+str2+'])', 'g'))
  let length = matches.length
  for (let i = 0; i < matches.length; i++){
    if (matches[i] !== ' ' && !seen[matches[i]]) {
      common += matches[i];
      seen[matches[i]] = true;
    }
  }
  return common
}
  
console.log(commonCharacters(test1, test2))