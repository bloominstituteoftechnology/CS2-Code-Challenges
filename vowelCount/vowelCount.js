/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

 const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      counter++;
    }
  }
  return counter;
 };