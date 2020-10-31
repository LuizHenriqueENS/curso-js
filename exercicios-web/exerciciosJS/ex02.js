function triangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return `Com base nos valores recebidos, seu triângulo é EQUILÁTERO`
    } else if (ladoA != ladoB && ladoB != ladoC) {
        return `Com base nos valores recebidos, seu triângulo é ESCALENO`
    } else {
        return `Com base nos valores recebidos, seu triângulo é ISÓCELES`
    }
}

console.log(triangulo(2, 2, 2))
console.log(triangulo(2, 3, 3))
console.log(triangulo(2, 3, 4))