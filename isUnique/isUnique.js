/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */


 const isUnique = (string) => {
  let uniqueStr = ' ';
  let nonUnique = ' ';
  for (let i = 0; i < string.length; i++){
    if(uniqueStr[i] !== string[i]){
      uniqueStr += string[i];
    } else if (string[i]== string[i]){
        nonUnique += string[i];
    }
  }
  console.log(uniqueStr);
}

isUnique('Goodbyee')

// Issue is that it catches a nonUniqe and stores it only once
// Ex: Goodbyee turns into Godbyee
//Try to figure out why that is 

//Incrementing (++) won't work. Re-ordering of test statements doesn't work. 