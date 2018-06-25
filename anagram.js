const HashMap = require('./hashmap');

// //Write an algorithm to group a list of words into anagrams. For example, 
// if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
//  the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], 
//  ['acre', 'race']].

// input - array of strings
// output - array of arrays of strings grouped 

//

function anagram(arr){
  let anaMap = new HashMap();
  
// loop through input arr
// if anaMap doesn't have current key
//    anaMap.set(elem[i].sort(a,b) => a -b, [elem])   

for (let i = 0; i < arr.length; i++) {
  let currentElement = arr[i];
  let sortedElement = arr[i].split('').sort().join('');
  try{
    if(anaMap.get(sortedElement)){
      let storedValue = anaMap.get(sortedElement);
      anaMap.set(sortedElement, [...storedValue, currentElement])
    }
  } catch(err){
    anaMap.set(sortedElement, [currentElement]);
  }   
}

// if key already exists
//    let currentValue = get(key) ---returns value
//    anaMap.set(elem[i].sort(a,b) => a -b, [currentValue, elem])
  let answerArr = [];

  for (const keys of anaMap._slots){
    if(keys !== undefined){
      answerArr.push(keys.value)
    }
  }
  return answerArr; 
}

let example = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(anagram(example));
