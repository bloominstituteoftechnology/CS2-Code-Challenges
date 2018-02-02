/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 const reverseCase = (string) => {
 	let newStr = '';
 	for (let i = 0; i < string.length; i++) {
 		if (string[i] === string[i].toUpperCase()) {
 			newStr = newStr.concat(string[i].toLowerCase());
 		} else {
 			newStr = newStr.concat(string[i].toUpperCase());
 		}
 	}
 	return newStr;
 }