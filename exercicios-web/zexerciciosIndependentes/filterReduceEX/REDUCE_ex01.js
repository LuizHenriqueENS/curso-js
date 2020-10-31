// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce(function (a, b){
        return a + b
    })
 }
 
 console.log(total([1,2,3])); // 6