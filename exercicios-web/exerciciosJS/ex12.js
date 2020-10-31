function fatorial(n){
    let fator = 1
    for(let i = 1; i <= n; i ++){
        fator *= i
    }
    return console.log(fator)
}

fatorial(0)