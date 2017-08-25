/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/

// create function
//  create new string
// create memo that contains a whitespace as a key value pair (this will contain every character weve seen)
// create an object that will hold the characters from s2 (this will allow us to only iterate throgh s2 once instead of once for every charcter in s1)
// iterate through s2 creating a key value pair in the s2 object
// iterate through s1
//  if it contains a character that is a key in the s2obj and isnt yet in memo then add it to the string common
//  add to the common character to the memo so we dont add duplicates
// return common

//TEST
// commonCharacters('acexivou', 'aegihobu') => "aeiou"
// commonCharacters('ad  fsaaa u', 'aefdfa aaaa r u') => "adfu"

const commonCharacters = (s1, s2) => {
    let common = '';
    const memo = {
      ' ': ' '
    };
    const s2obj = {};
    for (let j = 0; j < s2.length; j++) {
      s2obj[s2[j]] = s2[j];
    }
    for (let i = 0; i < s1.length; i++) {
        if (s2obj[s1[i]] && !memo[s1[i]]) {
            common += s1[i];
            memo[s1[i]] = s1[i];
        }
    }
  return common;
};
