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

const longestString = (strings) => {
let longest = '';
  for(let i = 0; i < strings.length; i++){
    
    if(strings[i].length > longest.length){
        longest = strings[i];
    }
    
  }
return longest;
};

strings = ['a', 'ab', 'abracadabra','putmeincoach', 'overwatch', 'wishIhadGoogleFiber'];
console.log(longestString(strings));