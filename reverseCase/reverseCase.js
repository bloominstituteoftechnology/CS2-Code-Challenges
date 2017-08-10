/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const stringChange = (string)=>{
 let newString ='';
  for (let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
   
 }
  console.log(newString); 
};

(stringChange('rAYMOND Rosario'));