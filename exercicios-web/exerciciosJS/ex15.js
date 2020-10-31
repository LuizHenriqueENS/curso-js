function escolherCarro(carro) {
    switch (carro) {
        case `hatch`:
            console.log(`Compra efetuada com sucesso`)
            break
        case `sedan`: case `motocicleta`: case `caminhonete`:
            console.log(`Tem certeza que não prefere este modelo?`)
            break
        default:
            console.log(`Não trabalhos com este tipo de automóvel aqui`)
    }
}

escolherCarro('hatch')
escolherCarro('motocicleta')
escolherCarro('sedan')
escolherCarro('caminhonete')
escolherCarro('jetski')
