Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Algo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ // função callBack tem três params nome, indice e array
    console.log(`${indice + 1}) ${nome}`)
})