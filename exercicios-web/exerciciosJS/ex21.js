function planoDeSaude(idade){
    let valorPlano = 100

    if(idade < 10){
        valorPlano += 80
    } else if (idade == 10 || idade <= 30){
        valorPlano += 50
    } else if (idade > 30 && idade <= 60) {
        valorPlano += 95
    } else if (idade > 60) {
        valorPlano += 130
    }
    return valorPlano
}

console.log(planoDeSaude(8))
console.log(planoDeSaude(15))
console.log(planoDeSaude(35))
console.log(planoDeSaude(52))
console.log(planoDeSaude(80))
