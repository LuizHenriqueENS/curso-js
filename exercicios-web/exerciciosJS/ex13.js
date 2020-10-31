function eDiaUtil(dia){
    switch(dia){
        case 1: 
            return `Fim de Semana`
        case 2: 
        case 3:
        case 4:
        case 5:
        case 6:
            return `Dia útil`
        case 7: 
            return `Fim de Semana`
        default:
            return `Dia inválido`
    }
}

console.log(eDiaUtil(4))