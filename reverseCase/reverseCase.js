/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

 // Test Cases
/**
 * "Hello World" => "hELLO wORLD"
 * "i AM a STRING" => "I am A string"
 */

 // Psuedo Code
 /**
  * split string into an array
  *   map over string array
  *     if current char is uppercase
  *       return char as lowercase
  *     if current char is lowercase
  *       return char as uppercase
  * join array as string and return
  */

  // Solution
  const reversCase = (string) => string
    .split('')
    .map(c => c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase())
    .join('')


  // Tests
  const test1 = "Hello World";
  const test2 = "i AM a STRING";

  console.log(reversCase(test1) === 'hELLO wORLD');
  console.log(reversCase(test2) === 'I am A string');
