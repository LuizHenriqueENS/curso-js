// 3) Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    const quemVotou = arr.filter(e => e.voted)
    if(quemVotou.length > 0){
        return quemVotou.reduce(function(a,b,i){
            return i + 1
        })
    } else {
        return `Ninguem votou`
    }
}

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: false },
    { name: 'Ed', age: 55, voted: false },
    { name: 'Tami', age: 54, voted: false },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: false },
    { name: 'Jeff', age: 30, voted: false },
    { name: 'Zack', age: 19, voted: false }
];
console.log(totalVotes(voters)); // 7