/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/

const commonCharacters = (str1, str2) => {
  let common = [];

  str1.split('').forEach((char) => {
    if (str2.split('').includes(char) && !common.includes(char)) {
      common.push(char);
    }
  })
  return common.join('').replace(' ', '');
}

console.log(commonCharacters('abcdefg', 'bcd g'));