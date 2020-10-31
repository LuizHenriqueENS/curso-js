function valorArredondado(valorDecimal){
    let valorEmReais = `R$${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    return console.log(valorEmReais)
}
valorArredondado(0.30000000000000004)