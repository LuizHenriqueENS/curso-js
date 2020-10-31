const aprovados = ['Agatha', 'Algo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // função callBack tem três params nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)