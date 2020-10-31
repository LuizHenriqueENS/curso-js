const contadoA = require('./instanciaUnica')
const contadoB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadoA.inc()
contadoA.inc()
console.log(contadoA.valor, contadoB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
