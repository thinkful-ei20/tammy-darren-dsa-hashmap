const HashMap = require('./hashmap');


// racecar
// r -2
// a -2
// c -2 
// e -1
// star rats
// amanaplana c analpanama

// palindrome can only have 1 chracter that appears only once
// every other char needs to appear even amount of times

//

//input a string
function isPalindrome(str){
  let palin = new HashMap();
  //store unique characters in a seperate string to be accessed later
  let uniqueChars = '';
  //for each character in string, put into hashmap
  //Palidrome can only have even number of chars and one odd: 0 = even, 1 = odd
  //need something to check the if the key(character) is already there
  for (i=0; i<str.length; i++){
    //if it exists set check value
    //need a try catch because .get() returns an error if it doesn't exist
    try{
      if (palin.get(str[i])){
        //if value === 0
        //set value to 1 call palin.set(character, 1)
        if (palin.get(str[i]) === 0){   
          palin.set(str[i], 1);
        //if value === 1
        //set value to 0 call palin.set(character, 1)
        } else if (palin.get(str[i]) === 1){   
          palin.set(str[i], 0);
        }

      }
    } catch (err){
      //if the character hasen't occured yet, set a new slot
      //call palin.set(character, 1)
      //key:character
      //value: 1
      palin.set(str[i], 1);
      
      //add the character to the unique string to be checked for value later
      uniqueChars += str[i];
    }
  }
   //console.log(palin);


  // To check only one '1'
  // counter to adds up the values in each unique string
  // if even occurance = 0, if odd occurance = 1
  // If the counter is > 1, return false
    let counter = 0;
   for (let i=0; i < uniqueChars.length; i++){
     if (palin.get(uniqueChars[i]) === 1){
       counter++;
     }
   }

   return counter > 1 ? false : true;


    //if the filtered array has more than one key with value of one, it's not palindrome



}

console.log(isPalindrome('starrats'));
