function verificadoDeString(string1, string2){
    let contido = true
    for (let i = 0; i <string1.length; i++){
        let caracteString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++){
            let caracteString2 = string2.charAt(j).toLowerCase()
            if(caracteString1 == caracteString2){
                contido = true
                break
            } else {
                contido = false
            }
        }
        if(!contido){
            return contido
        }
    }

    return contido

}



console.log(verificadoDeString('abc','abc'))