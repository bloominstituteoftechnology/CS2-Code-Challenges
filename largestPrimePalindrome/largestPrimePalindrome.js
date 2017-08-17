/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 */

const largestPrimePalindrome = () => {
    let numHolder;

    //Holds the reversed numbers as a string
    let reversedString;

    //holds the palindrome numbers
    let holdNum;
 
    //loop through the numbers 3 to 1000
     for (var counter = 3; counter <= 1000; counter++) {
         
            //boolean to state whether it's a prime
             var notPrime = false;

             //determine if the number is a prime
             for (var i = 2; i <= counter; i++) {
                 //if  divisible by more then itself and one this is true 
                 if (counter%i===0 && i!==counter) {
                     notPrime = true;
                 }
             }
             //if number is a prime it turns it into a string array and reverses it
             if (notPrime === false) {
                 numHolder = counter.toString();
                 reversedString = numHolder.split("").reverse().join("");
                 
             }

             //checks for the last palindromed number and stores it in hold num
             if(numHolder === reversedString){
                   holdNum = (numHolder);
                 }
             
         }
    //displays largest palindrome and converts it back to a number
    console.log(Number(holdNum));
  }
  
  //calls function to display largest palindrome from 0 to 1000
  console.log(largestPrimePalindrome());