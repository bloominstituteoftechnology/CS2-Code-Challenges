/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

 /* test cases:
 1000 => 929
 200 => 191
 1 => undefined
 */

 // create function that takes in num
 // iterate from top down to find the highest number that is a palindrome
 // this way for higher numbers you dont have to iterate as far 
 // set a counter and j at 2
 // use a while loop to test whether prime
 // the while loop will help to cut down on time because as soon as you find out its not
 // if the the i is found to be divisible by j the loop is stopped
 // also stop the loop once j surpases i/2  because then we know no number beyond that can be evenly divide i
 // add one to j each time through
 // if no number is found divisible evenly then return that number because it is the highest prime palindrome

 const largestPrimePalindrome = (num) => {
     for (let i = num; i > 0; i--) {
       const str = i.toString();
         if (str === str.split('').reverse().join('')) {
           while (count === 0 && j <= (i/2)) {
             if (i % j === 0) count++;
             j++;
           }
           if (count === 0) return i;
         }
     }
 };
