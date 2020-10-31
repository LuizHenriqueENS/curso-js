// pessoa -> 123 - > {...}
const pessoa = { nome: 'João ' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // congela o objeto. Não poderá ser alterado

pessoa.nome = 'Maria'
console.log(pessoa.nome)