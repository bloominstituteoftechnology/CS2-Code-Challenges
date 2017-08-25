/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

/*
  determine if number is prime
  determine whether or not it's a palindrome
  find largest number of all numbers less than 1000 -> so we start counting down from 999

  it's probably more efficient the other way around (palindrome, then prime)
*/

const findLargestPrimePalindromeLessThan1000 = () => {
  let i = 999;
  while (i > 0) {
    if (String(i) === String(i).split('').reverse().join('')) {
      if (isPrime(i)) {
        return i;
      }
    }
    i--;
  }
  return 'no prime numbers that are palindromes';
};

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = Math.floor(n/2); i > 2; i--) {
    if (n % i === 0) return false;
  }
  return true;
};

kisPrime(2);
isPrime(11);
isPrime(22);
isPrime(1);
