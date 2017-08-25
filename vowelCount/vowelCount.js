const vowelCount = (str) => {
  const obj = {a: 1, e: 1, i: 1, o: 1, u: 1};
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (obj[letter]) {
      count++;
    }
  }
  return count;
};

console.log(vowelCount('aeiouuursfeoi')); // -> 10;