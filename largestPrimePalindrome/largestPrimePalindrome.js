/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 function isPalindrome(num) {
    if ( num.toString() === num.toString().split( '' ).reverse().join( '' ) ) {
        return true;
    }
    return false;
}

let primesArray = new Array();

 function isPrime(num) {
     for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
 }

 function largestPrimePalindrome() {
     for (let i = 2; i < 1000; i++) {
         if( isPalindrome(i) && isPrime(i) ) {
            primesArray.push(i);
         }
     }
     return primesArray[primesArray.length - 1];
 }

console.log(largestPrimePalindrome());