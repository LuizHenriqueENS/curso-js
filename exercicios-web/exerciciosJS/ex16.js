function calculadora(valorA, operacao ,valorB){
    switch(operacao){
        case `+`:
            return valorA + valorB
        case `-`:
            return valorA - valorB
        case `*`:
            return valorA * valorB
        case `/`:
            return valorA / valorB
        default:
            return `Operação inválidas!`
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
console.log(calculadora(10, '+', 10));
