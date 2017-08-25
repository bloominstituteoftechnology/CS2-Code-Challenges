// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  let newStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const nextCharacter = str[i+1];
    if (character !== nextCharacter) {
      newStr += character + count;
      count = 1;
    }
    if (character === nextCharacter) {
      count++;
    }
  }
  return newStr;
}

console.log(stringCompression('aaaabbbbccccddcc'))

console.log(stringCompression('aaabeecac'));