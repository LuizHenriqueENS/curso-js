function progressaoAritmetica(n, a1, r) {

    let numeroDeTermos = a1 + (n - 1) * r
    let somatoria = a1
    let soma = a1 
    while (somatoria != numeroDeTermos) {
        console.log(somatoria)
        somatoria += r
        soma += somatoria
        if (somatoria == numeroDeTermos) { console.log(somatoria) }
    }
    return `Soma: ${soma}`
}

function progressaoGeometrica(n, a1, r) {

    let numeroDeTermos = a1 * r ** (n - 1)
    let soma = a1
    let somatoria = a1
    while (somatoria != numeroDeTermos){
        console.log(somatoria)
        somatoria *= r
        soma += somatoria 
        if (somatoria == numeroDeTermos){console.log(somatoria)}
    }
    return `Soma: ${soma}`
}
console.log(progressaoAritmetica(10, 10, 15))
console.log("-------------------")
console.log(progressaoGeometrica(10, 5, 3))