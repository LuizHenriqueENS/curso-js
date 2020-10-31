// 2) Take an array of numbers and make them strings

function numbersToString (arrayOfNumbers){
    return arrayOfNumbers.map(e => e.toString())
}

console.log(numbersToString([2, 5, 100]))