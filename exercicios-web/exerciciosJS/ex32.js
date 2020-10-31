vetorNum = [1, 2, 3, 4, 5]

function mediaAritmetica(vetor){
    let somaTotal = 0
    let totalNum = 0   
    for (let i = 0; i < vetor.length; i++){
        somaTotal += vetor[i]
        totalNum++
    }
    return somaTotal / totalNum
}

console.log(mediaAritmetica(vetorNum))