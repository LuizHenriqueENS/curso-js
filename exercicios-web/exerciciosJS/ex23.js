function notasAluno(codigoAluno, nota1, nota2, nota3) {
    let maior = maiorNota(nota1, nota2, nota3)
    if(mediaPonderada(maior) > 5){
        return `Código do aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. APROVADO!`
    } else {
        return `Código do aluno: ${codigoAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. REPROVADO!`
    }
}

function maiorNota(nota1, nota2, nota3) {
    if (nota1 > nota2 && nota1 > nota3) {
        return [nota1, nota2, nota3]
    } else if (nota2 > nota1 && nota2 > nota3) {
        return [nota2, nota1, nota3]
    } else {
        return [nota3, nota1, nota2]
    }
}

function mediaPonderada([]){
    return media = [0]*4 + [1]*3 + [2] * 3 / (4 + 3 + 3)   
}
console.log(notasAluno(123, 2.8, 6, 3.5))