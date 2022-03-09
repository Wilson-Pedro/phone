function ligar(){
    const trocar = document.createElement('div')
    trocar.setAttribute('id', 'walpaper')
    var trocado = document.querySelector('#screen')

    //Criei uam div com id horario
    const div = document.createElement('div')
    div.setAttribute('id', 'horario')
    
    var pai = trocado.parentNode

    pai.replaceChild(trocar, trocado)

    trocar.appendChild(div)

    horaDoDia()
}

function horaDoDia(){
    const res = document.getElementById('horario')
    const horas = new Date();
    const hrs = horas.getHours();
    const min = horas.getMinutes();

    if (min < 10){
        res.textContent += `${hrs}:0${min}`
    } else {
        res.textContent += `${hrs}:${min}`
    }

    return true
}

/*
const div = document.createElement('div')
div.setAttribute('id', 'horario')
const desligar = document.getElementById('desligado')

const deslig = desligar.parentNode

deslig.replaceChild(div, desligar)
*/
