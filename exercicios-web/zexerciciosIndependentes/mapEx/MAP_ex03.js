// Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(e => e.toLowerCase()).map(e => e.charAt(0).toUpperCase() + e.slice(1))
  }

  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))