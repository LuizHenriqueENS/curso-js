function calcularVenda(codigo, quantidade){
    switch(codigo){
        case 100:
            return `Cachorro Quente - R$${quantidade * 3.0}`
        case 200:
            return `Hambúger Simples - R$${quantidade * 4.0}`
        case 300:
            return `Cheesebuger - R$${quantidade * 5.5}`
        case 400:
            return `Bauru - R$${quantidade * 7.5}`
        case 500:
            return `Refrigerante - R$${quantidade * 3,5}`
        case 600:
            return `Suco - R$${quantidade * 2.8}`
        default:
            return `Produto não existe`
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
