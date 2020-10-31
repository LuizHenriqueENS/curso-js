function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let montante = capitalInicial + capitalInicial * taxaDeJuros * tempoDeAplicacao
    return console.log(montante)
}

function jurosComposto(capitalInicial, taxaDeJuros, tempoDeAplicacao){
    let montante = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    return console.log(montante)
}

jurosSimples(100, 10/100, 2)
jurosComposto(100, 10/100, 2)

