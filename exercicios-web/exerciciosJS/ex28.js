function paresImpares(vetornumeros) {
    let pares = 0
    let impares = 0
    for (let i = 1; i <= vetornumeros.length; i++) {
        if (i % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    return `São pares: ${pares}. São impares: ${impares}`
}
let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(paresImpares(vet))