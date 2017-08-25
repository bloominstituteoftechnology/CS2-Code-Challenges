// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = (str) => {
  let arr = []; 
  // let count =[];

  str.split('').forEach((letter) => {
    if (str.split('').includes(letter) && !arr.includes(letter)) {
      arr.push(letter);
    } 
    
    // Now, if I have the letters, use RegExp or match to get the count
    
    
  });
  
  return arr.join('').replace(str);
}

console.log(stringCompression('aaabbccc'));

const stringSearch = (str) => {
  for (let count =- 1, index =- 2; index != 1;
      count++, index = str.indexOf(stringSearch, index + 1)
    );
}

return str;
console.log(stringSearch('aaabbb'));
  
  