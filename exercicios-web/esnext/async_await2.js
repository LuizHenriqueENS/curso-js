const { reject } = require("lodash")
const { resolve } = require("path")

function gerarNumerosEntre(min, max, numeroProbidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if (numeroProbidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) {
            throw "Não deu certo"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}


gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)
