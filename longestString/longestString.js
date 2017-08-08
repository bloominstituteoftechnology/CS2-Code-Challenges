/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */
let longest = " ";
const strings = ['it', 'is', 'time', 'for', 'pizza', 'and', 'coding'];

const longestString = (strings) => {
  for (let i = 0; i < strings.length; i++){
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
};

console.log(longestString(strings));
