// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

// Test Case
const a = "aabcccccaaa"; // 'a2b1c5a3'
const b = "qwertyuiop"; // 'qwertyuiop'

// Solution
const stringCompression = str => {
  let a = [],
      count = 1,
      i;
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else if (str[i] !== str[i + 1]) {
      a.push(`${str[i]}${count}`);
      count = 1;
    }
  }
  // added conditional check to see if "compressed" string is longer than original string
  const result = a.join('');
  return result.length >= str.length ? str : result;
};

console.log(stringCompression(a));

// Tai's Solution
  // currentChar = null
  // compressedString = ''
  // charCount = 1
  // use a for loop, i = 0, until string.length, i++
    // if string.charAt(i) is equal to currentChar, charCount++
    // if (currentChar === null, currentChar = string.charAt(i)
    // if (string.charAt(i) !== currentChar || string.charAt(i) === undefined
      // compressedString += currentChar;
      // compressedString += charCount;
      // charCount = 1;
      // currentChar = string.charAt(i);
  // return using ternary statement (compressedString.length > string.length ? string
  // : compressedString;
// const compressString = (string) => {
//   let currentChar = string.charAt(0);
//   let compressedString = '';
//   let charCount = 0;
//   for (let i = 0; i <= string.length; i++) {
//     if (string.charAt(i) === currentChar) charCount++;
//     if (string.charAt(i) !== currentChar || string.charAt(i) === undefined) {
//       compressedString += currentChar;
//       compressedString += charCount;
//       charCount = 1;
//       currentChar = string.charAt(i);
//     }
//   }
//   return compressedString.length > string.length ? string : compressedString;
// };

// console.log(compressString('qwertyuiop'));