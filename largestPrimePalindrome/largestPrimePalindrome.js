/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */


const isPalindrome = (num) => {
  const num2Str = num.toString();

  if (num2Str === num2Str.split('').reverse().join('')) return true;
  return false;
}

const isPrime = (num) => {
  if (num === 1 || num === 3) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const lPPArray = []; 

const largestPrimePalindrome = (num) => {
  for (let i = 2; i < 1000; i++) {
    if (isPalindrome(i) && isPrime(i)) {
      lPPArray.push(i);
    }
  }
  return lPPArray[lPPArray.length - 1];
}

console.log(largestPrimePalindrome());