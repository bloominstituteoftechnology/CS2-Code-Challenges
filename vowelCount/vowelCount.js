/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

 const vowelCount = function(str) {
   let m = str.match(/[aeiou]/gi);
   return m === null ? 0 : m.length;
 }

 console.log(vowelCount('Hello World!'));