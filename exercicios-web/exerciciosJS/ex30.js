function maiorEMenor(vetorNumeros){
    let maior = vetorNumeros[0]
    let menor = vetorNumeros[0]
    for (let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] > maior){
            maior = vetorNumeros[i]
        }
        if (vetorNumeros[i] < menor){
            menor = vetorNumeros[i]
        }
    }
    return [maior, menor]

}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorEMenor(vetor))

