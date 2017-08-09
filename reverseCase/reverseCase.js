/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 /*
Need to iterate over every character in the string
If it is not a letter of the alphabet (if it is a space), skip it
If it is uppercase, make it lowercase
If it is lowercase, make it uppercase
New empty string -> add iterated, changed letters to empty string
 */

 const reverseCase = (str) => {
   let str2 = '';
   for (let i = 0; i < str.length; i++) {
     if (str.charAt(i) === '') {
       continue;
     } else if (str.charAt(i) === str.charAt(i).toUpperCase()) {
       str2 += str.charAt(i).toLowerCase();
     } else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
       str2 += str.charAt(i).toUpperCase();
     }
   }
   return str2;
 }

console.log(reverseCase("HeLlO"));
console.log(reverseCase("I am JuST A litTlE SeNTencE."));
console.log(reverseCase("tHIS iz guD PraKTiS"));
