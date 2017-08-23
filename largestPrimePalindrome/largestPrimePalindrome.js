/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const largestPrimePalindrome = () => {
	const isPalindrome = (num) => {
		if (num === num.toString().split('').reverse().join('')) return true;
	} 

	const isPrime = (num) => {
		if (num % 2 !== 0) {
			for (let j = 3; j <= Math.sqrt(num); j++) {
				if (num % j === 0) return false;
			}
			return true;
		}
	}
	
	for (let i = 1000; i > 0; i--) {
		if (isPalindrome(i) && isPrime(i)) return i;
	 }
  }