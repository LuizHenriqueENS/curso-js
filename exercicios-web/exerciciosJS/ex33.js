let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function unia(vetor1, vetor2){
    return vetor1.concat(vetor2)
}

console.log(unia(vetorInteiro, vetorDouble))
console.log(unia(vetorDouble, vetorString))