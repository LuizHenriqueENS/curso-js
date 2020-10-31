let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

function trocaVetores (vetorA, vetorB){
    if (vetorA.length == vetorB.length){
        for(let i = 0; i < vetorB.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        console.log(`Vetores não possuem o mesmo tamanho`)
    }

    console.log(`Novo vetor A: ${vetorA}`)
    console.log(`Novo vetor B: ${vetorB}`)
}

trocaVetores(vetorA, vetorB)