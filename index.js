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
