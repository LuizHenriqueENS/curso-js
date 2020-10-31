// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(e => e.length <= 5)
  }

  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]).sort()); // ["by", "dog", "wolf", "eaten"]