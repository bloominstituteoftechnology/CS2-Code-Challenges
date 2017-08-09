/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 /*
 *  Accept a string into the function
 *  check whether each letter is upcase through
 *  a for loop, then convert each string opposite to
 *  what they are.
 */

const reverseCase = (string) => {
   let changedString = '';

   for (let i = 0; i < string.length; i++){
     let n = string.charAt(i);
     if (n == n.toUpperCase()) {
       n = n.toLowerCase();
     } else {
       n = n.toUpperCase();
     }
     changedString += n;
   }
   return changedString;
 };

 console.log(reverseCase('overWATCH IS great'));
