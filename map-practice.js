var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, word =>  word.length));

console.log(map(words, word => word.toUpperCase()));

console.log(map(words, word => word.split('').reverse().join('')));

function map(arr, action) {
  let newArr = []
  for (const element of arr) {
    newArr.push(action(element));
  }
  return newArr;
}