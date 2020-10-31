function fruta (nomeDaFruta){
    switch(nomeDaFruta){
        case `maçã`:
            return `Não vendemos esta fruta aqui`
        case `kiwi`:
            return `Estamos com escassez de kiwis`
        case `melancia`:
            return `Aqui está, são R$3,00 o quilo`
        default:
            return `Erro!! Valor informado errado ou não existe`
    }
}

console.log(fruta('maçã'))
console.log(fruta('kiwi'))
console.log(fruta('melancia'))
console.log(fruta('banana'))

