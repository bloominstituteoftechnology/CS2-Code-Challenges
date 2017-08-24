/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

 const vowelCount = str => 
   Array.from(str)
  .filter(vowel => 'aeiou'.includes(vowel)).length;
  

console.log(vowelCount('hello')); // 2
