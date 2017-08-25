/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const isPrime = (num) => {
  if (num == 0 || num == 1 || num % 2 == 0) return false;
  else if (num == 2) return true;
  else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num%i == 0) return false;
    }
    return true;
  }
}

const isPalindrome = (num) => {
  strNum = num.toString()
  for (let i = 0; i < strNum.length / 2; i++) {
    if (strNum[i] != strNum[strNum.length - (1+i)]) return false
  }
  return true 
}

const longestPalindrome = (range) => {
  for (let i = range; i > 0; i--) {
    if (isPrime(i) && isPalindrome(i)) return i;
  }
  return undefined;
}
console.log(isPrime(68))
console.log(isPrime(19))
console.log(isPalindrome(12345))
console.log(isPalindrome(123454321))

console.log(longestPalindrome(1000))