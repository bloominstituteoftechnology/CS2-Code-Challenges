/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */


// 1. identify test cases
// ['abc', 'a', 'b'] -> 'abc'
// ['abc', 'def'] -> 'def'
// [] -> null


/*function longestString strings
  loop over the array of strings
    do something in the loop
  return longestString */

 const longestString= (array) => {
  let longest = 0;
  for(let i=0; i<array.length-1; i++){
   if (array[i].length > array[i+1].length ){
     longest = array[i];
   } else {
     longest = array[i+1];
   }  
  return longest;    // than do something else 
}