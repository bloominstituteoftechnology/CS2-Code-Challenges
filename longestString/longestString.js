/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
/* 
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

// 1. identify test cases
// ['abc', 'a', 'b'] -> 'abc'
// ['abc', 'def'] -> 'def'
// [] -> null

/*
function longestString strings
  loop over the array of strings
    do something in the loop
  return longestString
*/
// let longest = 0;
// let strings = ['Hello there', 'go HOME NOW PLEASE', 'NOPE'];

// const longestString = (strings) => {
//   for(let i = 0; i < strings.length; i++){
//     if(strings[i].length > longest){
//       longest = strings[i];
//     }
//   }
//   return longest;
// };

// console.log(longestString(strings));

// let longest = 0;
// let strings = ['Hello there please go to the basement', 'go HOME NOW PLEASE', 'NOPE'];

// const longestString = (strings) => {
//   for(let i = 0; i < strings.length; i++){
//     if(strings[i].length > longest){
//       if(strings[i] > strings){
//         longest = strings[i];
//     }
//    }
//   }
//   return longest;
// };

// console.log(longestString(strings));


let strings = ['This is a story all about how ', 'my life got twist turned upside down', 'NOPE'];

const longestString = (strings) => {
  let longest = strings[0];
  for(let i = 0; i < strings.length; i++){
    if(strings[i].length > longest.length){
      longest = strings[i];
    }
  }
  return longest;
};

console.log(longestString(strings));