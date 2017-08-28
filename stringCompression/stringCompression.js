// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const strCompress = (str) => {
  
  const counts = {};

  let char, index, strlen, count;
  
  for (index = 0, strlen = str.length; index < strlen; ++index) {
    char = str.charAt(index);
    count = counts[char];
    counts[char] = count ? count + 1 : 1;
  }
  for (char in counts) {
    console.log(`${char} ${counts[char]}`);
  }
};

console.log(strCompress('aaabbbbc'));