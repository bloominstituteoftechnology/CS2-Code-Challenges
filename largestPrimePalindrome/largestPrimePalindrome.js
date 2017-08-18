/*
* Create a function that returns the largest prime palindrome less than 1000.
* Hint: it's 929
* You will first want to determine if the number is a palindrome and then determine if it is prime.
* A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
*/

//Test 1000 => 929

// WAY WAYYY faster
const largestPrimePalindrome = n => {
  const isPrime = n => {
    let divisor = 3,
        limit = Math.sqrt(n);
  
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
  
    while (divisor <= limit) {
      if (n % divisor === 0) return false;
      else divisor += 2;
    }
    return true;
  }
  
  const isPalindrome = n => {
    let str = n.toString(),
        len = str.length;
  
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len -1 -i])
        return false;
    }
    return true;
  }

  for (let i = n; i > 0; i--) {
    if (isPrime(i) && isPalindrome(i)) return i;
  }
}

console.log(largestPrimePalindrome(1000));

// // WAAAY Faster
// const longestPalindromePrime = (num) => {
//   for (let i = num; i > 0; i--) {
//     const str = i.toString();
//       if (str === str.split('').reverse().join('')) {
//         let j = 2;
//         let count = 0;
//         while (count === 0 && j <= (i/2)) {
//           if (i % j === 0) count++;
//           j++;
//         }
//         if (count === 0) return i;
//       }
//   }
// };

// function isPrime(number) {
//   if (number < 2) {return false}
//   if (number != Math.round(number)) {return false}
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i == 0) {isPrime = false}
//   }
//   return isPrime;
// }

// const longestPalindromePrime = (number) => {
//   for (let i = 0; i < number; i++){
//     const test = number - i;
//     if (isPrime(test)) {
//       if (test === parseInt([...test.toString()].reverse().join(''))) {
//         return test
//       }
//     }
//   }
// }

console.log(longestPalindromePrime(500));