// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    return arr.filter(e => e % 2 == 0)
}

console.log(evensOnly([3, 6, 8, 2, 7, 9, 102, 20, 33])); /// [6, 8, 2]
