/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 * 
 * must track both the longest length as well as the longest string
 * will mapping work?
 * 
 * in: arr of strings out: longest string
 * to find the longest string in a list of strings
 * take a list of strings, choose first string as being longest(assuming
 * that a valid list of strings has been inputted) and then continue to loop through list until
 * exhausted
 *return longest string
 *
 *
  */




const longest = (arr) => {
  if(arr.length === 0) return null;
  let longestLength = arr[0].length;
  let longestString = arr[0];
  arr.forEach((str) => { // whatever...will just use forEach instead of starting at i = 1 using for loop
    if(str.length > longestLength){
      longestLength = str.length;
      longestString = str;
    }
  });
  return longestString;
};

/* expect longest(['a','aaaaa','aa']) to return 'aaaaa'
 * expect longest(['aaaaa','a','aa']) to return 'aaaaa'
 * expect longest(['a','aa','aaaaa']) to return 'aaaaa'
 * expect longest(['aaaaa','a','aaaaa']) to return 'aaaaa'
 *
 *
 */

longest(['a','aaaaa','aa']) === 'aaaaa';
