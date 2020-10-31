function numeroPorExtenso(numero){
    switch(numero){
        case 0:
            return `ZERO`
        case 1:
            return `UM`
        case 2: 
            return `DOIS`
        case 3:
            return `TRÊS`
        case 4:
            return `QUATRO`
        case 5:
            return `CINCO`
        case 6:
            return `SEIS`
        case 7:
            return `SETE`
        case 8:
            return `OITO`
        case 9: 
            return `NOVE`
        case 10:
            return `DEZ`
        default:
            return `NÚMERO FORA DO INTERVALO!`
    }
}

console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(4))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(6))
console.log(numeroPorExtenso(7))
console.log(numeroPorExtenso(8))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(11))
