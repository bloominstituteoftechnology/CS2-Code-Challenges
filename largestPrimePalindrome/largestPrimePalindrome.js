/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const isPalindrome = (input) => {
	for (let i = 0; i < Math.floor(input.length / 2); i++) {
		if (input[i] !== input[input.length - i - 1]) {
			return false;
		}
	}
	return true;
}

const primePal = () => {
	let primePalindrome = 0;
	for (let counter = 0; counter <= 100; counter++) {
	    var notPrime = false;
	    for (let i = 2; i <= counter; i++) {
	        if (counter%i===0 && i!==counter) {
	            notPrime = true;
	        }
	    }
	    if (notPrime === false) {
	        console.log(counter);
	        if (isPalindrome(counter) && counter !== primePalindrome) {
	        	primePalindrome = counter;
	        }
	    }
	}
	return primePalindrome;
}

primePal();