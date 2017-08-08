/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

console.log('Picking an OS with the highest number of characters');
const stringLong = (strings) => {
  let os = ['MacOSX', 'Linux', 'Windows10'];
  console.log(os);
    for(let i = 0; i < os.length; i++){
      let number = os[i];
      console.log(number.length);
      if(number.length > 8){

        console.log('Windows 10 is best OS');
        break;
      }//if
    }//for
};


stringLong();
