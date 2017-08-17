/*
* Create a function that returns the largest prime palindrome less than 1000.
* Hint: it's 929
* You will first want to determine if the number is a palindrome and then determine if it is prime.
* A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
*/

//Test 1000 => 929

function isPrime(number) {
     if (number < 2) {return false}
     if (number != Math.round(number)) {return false}
     let isPrime = true;
     for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {isPrime = false}
     }
     return isPrime;
  }

const longestPalindromePrime = (number) => {
  for (let i = 0; i < number; i++){
    const test = number - i;
    if (isPrime(test) && test === parseInt([...test.toString()].reverse().join(''))) {
      return test
    }
  }
}

console.log(longestPalindromePrime(500));