/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/
const commonCharacters = (string1,string2) => {
	const first = new Set(string1);
	const second = new Set(string2); 
	const returnedStr = [...first].filter(char  => second.has(char));
	return returnedStr;
}

console.log(commonCharacters('acexivou', 'aegihobu'));  