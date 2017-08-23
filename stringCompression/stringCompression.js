// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).


stringCompression = (str) => {
    const holderArray = [];
    let counter = 1;
   
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] === str[(i + 1)]) {
        counter++;
      } else {
        holderArray.push(str[i]);
        holderArray.push(counter);
        counter = 1;
      }
    }
   
    if (holderArray.concat('').length < str.length) {
      return holderArray.join('');
   }
   return str;
  };
 
 let doneThis = stringCompression("aabcccccaaa");
 console.log(doneThis);