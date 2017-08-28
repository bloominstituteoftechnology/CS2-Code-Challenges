/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 const isPrime = (num) => {
   if (num <= 0) {
     return false;
  }
  let reverseNum = num.toString().split('').reverse().join('');

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return reverseNum === num;
    }
  }
  return num !== 1;
 };
 console.log(isPrime(929)); // true
 console.log(isPrime(456)) // false 