function conceitoNotas(vetorNotas) {
    for (let i = 0; i < vetorNotas.length; i ++){
        avaliacaoNota(vetorNotas[i])
    }
}

function avaliacaoNota(valorNota){
    if (valorNota == 0.0 || valorNota <= 4.9){
       console.log(`Nota ${valorNota} - conceito D`)
    } else if (valorNota == 5.0 || valorNota <= 6.9){
        console.log(`Nota ${valorNota} - conceito C`)
    } else if (valorNota == 7.0 || valorNota <= 8.9){
        console.log(`Nota ${valorNota} - conceito B`)
    } else if (valorNota == 9.0 || valorNota <= 10.0){
        console.log(`Nota ${valorNota.toFixed(1)} - conceito A`)
    } else {
        console.log(`Nota ${valorNota} - é invalida e fora do intervalo válido`)
    }
}
let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
conceitoNotas(notas)