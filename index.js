myArray = [1, 5, 6];

function map(arr, callback) {
  //new array
  const newArray = [];
  //loop
  for (let i = 0; i < arr.length; i++) {
    //push to new array
    const modifiedItem = callback(arr[i]);
    newArray.push(modifiedItem);
  }
  //return new array
  return newArray;
}

console.log(map(myArray, (n) => n * 2));

function filter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      const item = arr[i];
      filteredArray.push(item);
    }
  }
  return filteredArray;
}
console.log(filter(myArray, (n) => n % 2 === 0));

function every(arr, predicate) {
  for (i = 0; i < arr.length; i++) {
    if (predicate(arr[i]) === false) {
      return "false";
    }
  }
  return "true";
}

console.log(every([2, 4, 6], (n) => n % 2 === 0));
console.log(every([1, 2, 3], (n) => n % 2 === 0));


function addPunctuation(punctuation) {
  return (string) => {
// console.log(string, punctuation);

    return string + punctuation;
  };
}
const addExcitement = addPunctuation('!!!');

console.log(addExcitement('Hello World'));
console.log(addExcitement('Pokemon, catch em all'));