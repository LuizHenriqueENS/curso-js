function estatisticaPontuacao(resultadoDosJogos) {
    let pontuacao = resultadoDosJogos.split(", ")
    let atualMelhorPontuacao = pontuacao[0]
    let recordesQuebrados = []
    let atualPiorPontuacao = pontuacao[0]
    let piorPontuacao = 1

    for ( let i = 0; i < pontuacao.length; i++){
        if(pontuacao[i] > atualMelhorPontuacao){
            atualMelhorPontuacao = Number(pontuacao[i])
            recordesQuebrados.push(Number(pontuacao[i]))
        } else if (pontuacao[i] < atualPiorPontuacao){
            atualPiorPontuacao = Number(pontuacao[i])
            piorPontuacao = i + 1
        }
    }

    return [recordesQuebrados.length, piorPontuacao]
}

console.log(estatisticaPontuacao("30, 40, 20, 4, 51, 25, 42, 38, 56, 0"))
console.log(estatisticaPontuacao("10, 20, 20, 8, 25, 2, 0, 30, 1"))