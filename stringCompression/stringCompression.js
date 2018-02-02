// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const compressString = (string) => {
  let currentChar = string.charAt(0);
  let compressedString = '';
  let charCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === currentChar) charCount++;
    if (string.charAt(i) !== currentChar || string.charAt(i) === undefined) {
      compressedString += currentChar;
      compressedString += charCount;
      charCount = 1;
      currentChar = string.charAt(i);
    }
  }
  return compressedString.length > string.length ? string : compressedString;
}