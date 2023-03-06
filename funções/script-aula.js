function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(3))

function pi(){
    return 3.14;
}

var total = 5 * pi()
console.log(total)

function imc(peso, altura){
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(80, 1.87))

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do ceu'
    } else if(cor === 'verde'){
        return 'Eu gosto de mato'
    } else {
        return 'Eu não gosto de cores'
    }
}
function mostraConsole(){
    console.log("Parabéns voce clickou :D")
}

addEventListener('click', mostraConsole)

function imc2(peso, altura){ 
    const imc = peso/ (altura * altura)
    console.log(imc)
}

imc2(20, 1.8)

function terceiraIdade(idade){
    if(typeof idade !== "number"){
        return "por favor coloque um numero"
    } else if(idade >= 60){
        return true
    } else {
        return false
    }
}

console.log(terceiraIdade('olá mundo!!'))


function precisoVisitar(paisesVisitados){
    var totalPaises = 193
    console.log(`Aindam faltam ${totalPaises - paisesVisitados} paises`)
}

precisoVisitar(3)