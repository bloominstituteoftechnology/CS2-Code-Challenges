/* Instructions
 *    Find the first item that occurs an even number of times in an array.
 *     Remember to handle multiple even-occurance items and return the first one.
 *      Return null if there are no even-occurance items.
 */

// Test Cases
const onlyEven = [1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]; //  4

const evenOccurence = (arr) => {
  let a = [...new Set(arr)],
      b = 0;
  for (i in a) {
    b = 0;
    for (j in arr) {
      if (a[i] === arr[j]) {
        b++;
      }
    }
    if (b % 2 === 0) return a[i];
  }
	return null;
}

// const evenOccurence = arr => {
//   let a = {};

//   arr.forEach((i) => {
// 		if (a[i]) a[i] += 1;
// 		else a[i] = 1;
//   }) 
// 	for (let k in a) {
// 		if (a[k] % 2 === 0) return Number(k);
// 	}
// 	return null;
// };

console.log(evenOccurence(onlyEven));
