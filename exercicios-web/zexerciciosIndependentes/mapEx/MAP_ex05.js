// Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    let newArray = []
    arr.map(function (arr){
        if(arr.age >= 80){
            newArray.push(`${arr.name} can go to the MATRIX!`)
        } else {
            newArray.push(`${arr.name} is under age!!`)
        }
    })
    return newArray
  }

  console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))