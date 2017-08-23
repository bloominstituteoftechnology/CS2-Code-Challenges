// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

const test1 = 'aabcccccaaa' // => 'a2b1c5a3'
const test2 = 'aaaaaaaaaaaccccccdddddddefg' // => 'a11c6d7e1f1g1'
const test3 = 'AaaaBBbCcccDDDd'// 'AaaaBBbCcccDDDd'
const test4 = 'ABCDD'// => 'ABCDD'

const compressor = (string) => {
  const letters = []
  for(let i = 0; i < string.length; i++) {
    if (i === 0 || string[i] !== string[i - 1]) {
      letters.push(...[string[i], 1])
    } else {
      letters[letters.length - 1]++
    }
  }
  return letters.length > string.length ? string : letters.join('')
}

console.log(compressor(test1))
console.log(compressor(test2))
console.log(compressor(test3))
console.log(compressor(test4))