// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

/*
create function that takes in string
    intitialize an empty str
    initialize a memo that keeps track of how many times in a row we've seen a value
    loop through the string
        if it is the first character or the previous character before this one is different
            create the character as a key in memo with a value of 1
        if the previous character is the same as the current character
            add one to the characters key value in memo
        if the next character is different from the current character
            add the current character add the amount of times in a row we've seen that character to the new string
    if the new string's length is less than the original string return the new string
    return the original string
*/

//Test Cases
//'aabcccccaaa' => 'a2b1c5a3'
//'aeiou' => 'aeiou'

const stringCompression = (str) => {
    let newstr = '';
    const memo = {};
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] !== str[i]) {
          memo[str[i]] = 1;
        }
        if (str[i - 1] === str[i]) {
          memo[str[i]] += 1
        }
      if (str[i + 1] !== str[i]) {
        newstr += str[i] + memo[str[i]];
      }
    }
  if (newstr.length < str.length) return newstr;
  return newstr;
}
