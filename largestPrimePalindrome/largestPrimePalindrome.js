/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 const largestPrimePalindrome = (num) => {
  for (let i = num - 1; i > 1; i--) {
    if (i.toString() === i.toString().split('').reverse().join('')) {
      let isPrime = true;
      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        return i;
      }
    }
  }
}
console.log(largestPrimePalindrome(1000));