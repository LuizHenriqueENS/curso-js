function criarProduto (nome, preco){
    return {
        nome: nome,
        preco: preco -= preco * 0.10,
        desconto: `R$ ${preco * 0.10}`
    }
}

console.log(criarProduto('TV', 1500.00))