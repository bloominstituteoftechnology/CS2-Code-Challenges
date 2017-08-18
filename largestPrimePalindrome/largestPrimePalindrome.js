const isPrime = n => {
  let divisor = 3,
      limit = Math.sqrt(n);

  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  while (divisor <= limit) {
    if (n % divisor === 0) return false;
    else divisor += 2;
  }
  return true;
}

const isPalindrome = n => {
  let str = n.toString(),
      len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len -1 -i])
      return false;
  }
  return true;
}

const largestPrimePalindrome = n => {
  for (let i = n; i > 0; i--) {
    if (isPrime(i) && isPalindrome(i)) return i;
  }
}

console.log(largestPrimePalindrome(1000))


