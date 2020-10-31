function intervalo(vetorNumeros) {
    let dentro = 0
    let fora = 0
    for(let i = 0; i< vetorNumeros.length; i++){
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20 ){
            dentro++
        } else {
            fora++
        }
    }
    return `Dentro do Intervalo [10, 20]: ${dentro}. Fora do Intervalo: ${fora}` 
}

let vet = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(intervalo(vet))
console.log(vet.length)