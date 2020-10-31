function divisaoEResto (dividendo, divisor){
    let resultado = Math.floor(dividendo / divisor)
    return `
    Divisão = ${resultado}
    Resto = ${dividendo%divisor}`
}

console.log(divisaoEResto(11, 4))