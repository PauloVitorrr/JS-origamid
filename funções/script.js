//Crie uma função para verificar se um valor é Truthy

function Truthy(n1){
    if(n1){
        return true
    } else {
        false
    }
}
console.log(Truthy(1))

//crie uma função matemática paque retorne o perímetro de um quadrado lembrando: perimetro é a sma dos quatro lados do quadrado

function calculoQuadrado(lado1 , lado2,lado3, lado4){
    return lado1 + lado2 + lado3 + lado4
}
console.log(calculoQuadrado(5 , 6 , 5 , 5))

// crie uma função que retorne o seu nome completo, ela deve possuir os parametros 'nome', 'sobrenome'

function nomeCompleto(nome, sobrenome){
    return nome + sobrenome
}

console.log(nomeCompleto('Paulo Vitor', ' Sousa'))

// crie um função que verifica se um número é par

function parImpar(n1){
    if(n1 % 2 === 0 ){
        return 'esse número é par'
    } else {
        return 'esse número é impar'
    }
}
console.log(parImpar(10))

// crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function tipoDado(dado){
    return typeof dado
}

console.log(tipoDado(()=>{}))

// AddEventListener é uma função nativa do js o primeiro parametro é o evento que ocororre e o segundo o callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
function mostrarConsole(){
    console.log('Paulo Vitor Sousa Vaz')
}

addEventListener('scroll', mostrarConsole)

//Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados){
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))