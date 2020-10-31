const { reject } = require("lodash");
const { resolve } = require("path");

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.7)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('FIM!'))