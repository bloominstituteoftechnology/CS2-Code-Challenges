/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

/*
 * in: string
 * out: string with reversed case of input string
 *
 * create empty string
 * for each char
 *   if current char has lower case
 *     then change to upper
 *   else change to lower
 *
 */

const reverseCase = (str) => {
  return str.split('').map((ch) => {
    if (ch.toUpperCase() === ch) return ch.toLowerCase();
    return ch.toUpperCase();
  }).join('');
};
