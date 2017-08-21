/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/
const commonCharacters = (a, b) => {
  let c = '';
  for (let i = 0; i < a.length; i++) {
    const char = a.charAt(i);
    if (b.indexOf(char) !== -1) {
      if (c.indexOf(char) === -1) {
      c = c + char;
      }
    }
  }
  return c;
};
