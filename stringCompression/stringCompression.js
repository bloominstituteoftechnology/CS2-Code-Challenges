// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).
//1. create an object to hold properties, obj[letter]=1
//2. if string exists, increment obj[letter]

const stringCompression = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (obj[letter]) obj[letter]++;
    if (!obj[letter]) obj[letter] = 1;
  }
  let newStr = Object.entries(obj).join('').replace(/,/g,"");
  return newStr;
}

console.log(stringCompression('aaabeecac'));

//I screwed this up.  Will fix it.