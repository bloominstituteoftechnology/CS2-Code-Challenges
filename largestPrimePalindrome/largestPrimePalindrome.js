/*
* Create a function that returns the largest prime palindrome less than 1000.
* Hint: it's 929
* You will first want to determine if the number is a palindrome and then determine if it is prime.
* A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
*/

//Test 1000 => 929

const isPrime = (number) => {
  if (number === 1 || number === 3) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const longestPalindromePrime = (number) => {
  for (let i = 0; i < number; i++){
    const test = number - i;
    if (isPrime(test) && test === parseInt([...test+''].reverse().join(''))) {
      return test
    }
  }
}

console.log(longestPalindromePrime(1000) === 929);