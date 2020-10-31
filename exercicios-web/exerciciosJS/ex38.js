function nImpares(inicio = 0, fim = 100) {
    let invertido = []
    if (inicio > fim) {
        invertido = [fim, inicio]
        for (let i = invertido[0]; i <= invertido[1]; i++) {
            if (i % 2 != 0) { console.log(i) }
        }
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) { console.log(i) }
    }
}

nImpares()