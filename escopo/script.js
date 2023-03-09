// Por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4
}
console.log(cor, marca, pontos)
//R: o codigo retorna com erro pois, const e let só funcionam dentro do escopo

//Como corrigir o erro abaixo ?
function somarDois(x){
    const dois = 2;
    return x + 2
}
function dividirDois(x){
    return x + dois
}
//R: tirar a variavel dois do escopo da f:somarDois e colocar ela dentro da f:dividirDois
console.log(somarDois(4))
console.log(dividirDois(6))

//O que fazer para total retornar 500?
var numero = 50

for(let numero = 0; numero < 10; numero++){
    console.log(numero)
}
//R: mudar a declaração da variavel contadora para LET
const total = 10 * numero
console.log(total)