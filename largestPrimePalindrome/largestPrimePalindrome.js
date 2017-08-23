/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */ 

const largestPrime = (number) => {

  for (let i = number - 1; i > 1; i--) {

    //Setup palindrome check variables.
    reversed = i.toString().split("").reverse().join("");
    stringified = i.toString(); //i is stringified and stored in a separate variable otherwise leading zeroes are dropped.

    //Check if palindrome.
    if (stringified === reversed) {

      //If we're in here, we have a palindrome.  Now we see if it's prime.
      bust = false; //Prime until proven otherwise.

      //Check for remainder for all values leading up to number at index i.
      for (j = 2; j < i; j++) {
        if (i % j === 0) {
          bust = true;  //Not prime, let's break.
          break;
        }
      }

      if (bust === false) {
        console.log(`${i} is the largest prime palindrome less than ${number}.`);  //We found it!  Let's break.
        break;
      }

    }

  }

}

largestPrime(1000);