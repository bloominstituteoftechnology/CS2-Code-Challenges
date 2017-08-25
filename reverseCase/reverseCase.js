/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */



 const reverseCase = (str) => {
 	let newStr = ''
 	for (let i = 0; i < str.length; i++) {
 		if (str[i] === str[i].toUpperCase()) {
 			newStr += str[i].toLowerCase();
 		} else {
 			newStr += str[i].toUpperCase();
 		}
 	}
 	return newStr;
 };

 console.log(reverseCase('Hello There DUde wHatS upP'))