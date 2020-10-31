// 1) Make an array of numbers that are doubles of the first array

function doubleArray (array){
    return array.map(e => e * 2)
}

console.log(doubleArray([1, 2, 3, 4, 5]))