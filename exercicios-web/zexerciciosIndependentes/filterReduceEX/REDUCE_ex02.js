// 2) Turn an array of numbers into a long string of all those numbers.


function stringConcat(arr) {
   return arr.map(e => e.toString()).reduce((a, b) => {return a + b})
}
console.log(stringConcat([1,2,3])); // "123"