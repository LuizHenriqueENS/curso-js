function funcaoVetor(vetorNumerico, multiplicador){
    let numerosMultiplicados = []
    let posVetor = 0
    for (numeros in vetorNumerico){
        numerosMultiplicados.push(vetorNumerico[posVetor] * multiplicador)
        posVetor++
    }
    return numerosMultiplicados
}
let vetor = [1, 2, 3, 4, 5]
console.log(funcaoVetor(vetor, 2))

