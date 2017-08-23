// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = function(str) {
  let count = 1;
  let previous = str.charAt(0);
  let compressedStr = '';

  for (let i = 1; i < str.length; i++) {
    var current = str[i];

    if (previous === current) {
      count++;
    } else {
      compressedStr += previous + count;
      previous = current;
      count = 1;
    }
  }

  if (count === 1) {
    compressedStr += current;
  } else {
    compressedStr += current + count;
  }

  return compressedStr;
}

console.log(stringCompression('aaaabbbbcddd'));