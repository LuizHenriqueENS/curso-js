function saque(valorX) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorY = valorX
    while (valorY > 0) {
        if (valorY >= 100) {
            valorY -= 100
            contador100++
        } else if (valorY >= 50) {
            valorY -= 50
            contador50++
        } else if (valorY >= 10) {
            valorY -= 10
            contador10++
        } else if (valorY >= 5) {
            valorY -= 5
            contador5++
        }else if (valorY >= 1) {
            valorY -= 1
            contador1++
        } else {
            console.log(`Não deu certo`)
        }
        
    }
    //return `${contador100} // ${contador50} // ${contador10} // ${contador1}`
    return imprimirSaque(contador100, contador50, contador10,contador5, contador1)
}

function imprimirSaque(contador100, contador50, contador10,contador5, contador1){
    let stringValor = ' '
    switch(contador100 > 0){
        case true:
            stringValor = `${contador100} nota(s) de R$ 100. \n`
    }
    switch(contador50 > 0){
        case true:
            stringValor += `${contador50} nota(s) de R$ 50. \n`
    }
    switch(contador10 > 0){
        case true:
            stringValor += `${contador10} nota(s) de R$ 10.  \n`
    }
    switch(contador5 > 0){
        case true:
            stringValor += `${contador5} nota(s) de R$ 5. \n`
    }
    switch(contador1 > 0){
        case true:
            stringValor += `${contador1} nota(s) de R$ 1. `
            break
    }

    return stringValor
}

console.log(saque(153))