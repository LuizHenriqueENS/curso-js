function crescimentosCriancas(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    let menor = comparacao(altura1, taxaCrescimento1, altura2, taxaCrescimento2)
    let tempo = 0
    if (menor == true) {
        while (altura2 < altura1 || altura1 < altura2) {
            altura2 += taxaCrescimento2
            altura1 += taxaCrescimento1
            tempo++
        }
    } else {
       return `As crianças possuem o mesmo tamanho ou é impossível que uma criança cresça mais que a outra`
    }
    return tempo
}

function comparacao(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    if (altura1 > altura2) {
        return taxaCrescimento2 > taxaCrescimento1
    } else if (altura2 > altura1) {
        return taxaCrescimento1 > taxaCrescimento2
    }
}

console.log(crescimentosCriancas(110, 2, 130, 1))
// console.log(`TEXTOO`)