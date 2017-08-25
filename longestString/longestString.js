/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

/* Test Cases 
['a', 'bc' , 'acv'] -> 'acv'
strings of the same length with retrn the first longest element
*/

// loop through the strings array and search for the longest

const returnLongestString = (arr) => {
  let longestString = '';
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i].length > longestString.length) {
  		longestString = arr[i];
  	}
  }
  return longestString;
}

