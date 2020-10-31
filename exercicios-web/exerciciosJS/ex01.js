function operacoesMatematica(a, b){
    return `
    Soma = ${a + b}
    Subtração = ${a - b}
    Multiplicação = ${a * b}
    Divisão = ${a/b}`
}

console.log(operacoesMatematica(2, 2))
console.log(operacoesMatematica(4, 10))
console.log(operacoesMatematica(10, 4))
