const botaoBarra = document.querySelector('[botao-barra]')
const barraAumentar = document.querySelector('[barra-aumentar]')

let valor = 5
botaoBarra.onclick = () => {
    barraAumentar.style.width = `${valor}%`
    valor += 5
}
