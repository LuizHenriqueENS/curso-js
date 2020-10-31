function diferenca(valor){
    let proximoMulti5 = (valor + 3) % 5
    return valor - proximoMulti5
}

function notas(nota){
    if (nota < 37){
        return `Reprovado com nota ${nota}`
    } else if (nota%5 == 0 ){
        return `Aprovado com ${nota}`
    } else if ((nota + 1) % 5 == 0){
        return `Aprovado com ${nota + 1}`
    } else if ((nota + 2) % 5 == 0 ){
        return `Aprovado com ${nota + 2}`
    } else if ((nota + 3) % 5 == 0){
        return `Aprovado com ${nota + 3}`
    } else {
        return `Aprovado com ${nota}` 
    }
 }


console.log(notas(100))
console.log(notas(30))
console.log(notas(38))
console.log(notas(88))
console.log(notas(61))
console.log(notas(85))