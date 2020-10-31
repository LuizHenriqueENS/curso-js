// Closure é o escopo criado quando uma função  é delcarada
// Esse escopo permite a função acessar e manipular variáveis exernar à função

// Contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())