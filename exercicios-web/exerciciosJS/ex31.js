function qtsNegativos(vetorNumeros){
    let negativos = 0

    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] < 0){
            negativos++
        } 
    }
    return negativos
}
vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(qtsNegativos(vetor))