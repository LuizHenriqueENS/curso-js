function anuidadeDaAssociacao(mes, valorAnuidade) {
    if (mes > 0 && mes < 13){
        atraso = mes - 1
        return (valorAnuidade * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return `Mês inválido`
    }
}


console.log(anuidadeDaAssociacao(15, 100))