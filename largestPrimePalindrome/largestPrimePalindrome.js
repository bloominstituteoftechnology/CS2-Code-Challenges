/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 function largestPrimePalindrome(num) {

   for (i = 0;  i <= num; i++) {
     // Look for all primes within 1000
      var prime = function () {
      var num;
      for (num = 0; num < 1001; num++)
        if (num % 2 === 0){
          break;
        }
        else if (num % 3 === 0){
          break;
        }
        else if (num % 4=== 0){
          break;
        }
        else if (num % 5 === 0){
          break;
        }
        else if (num % 6 === 0){
          break;
        }
        else if (num % 7 === 0){
          break;
        }
        else if (num % 8 === 0){
          break;
        }
        else if (num % 9 === 0){
          break;
        }
        else if (num % 10 === 0){
          break;
        }
        else if (num % 11 === 0){
          break;
        }
        else if (num % 12 === 0){
          break;
        }
        else {
          return num;
        }
    }
   };
   //return prime;
   console.log(prime(1000));

      }
     // check those primes to see which one is a palindrome

   //  }

//return largestPrimePalindrome(1000);
//console.log(largestPrimePalindrome);
