// não aceita repeticao/não indexada

const { time } = require("console");
const { set } = require("lodash");
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthinas')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
