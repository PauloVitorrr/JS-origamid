// Verifique se a sua idade é maior que a de algum parente depedendo do resultado coloque no console 'É maior'. 'É igual'
var MinhaIdade = 19
var Primo = 15

if(MinhaIdade > Primo) {
    console.log('Minha idade é maior que a do meu primo')
} else if (MinhaIdade == Primo){
    console.log('Minha idade é igual a do meu primo')
} else if (MinhaIdade < Primo){
    console.log('Minha idade é menor que a do meu primo')
}


//qual o valor é retornado na seguinte expressão? 
var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
//True 

//Verifique se as seguintes variáveis são Truthy ou falsy
var nome = 'Andre'; //true
var idade = 28 // true
var possuiDoutorado = false; //true
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

//Compare o total de habitantes do brasil com a china (valor em Milhões)
var brasil = 207
var china = 1340

if(brasil > china){
    console.log('Brasil tem mais numeros de habitantes')
} else {
    console.log('China tem mais habitantes')
} 

//Oque irá aprecer no console
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}
//falso

// oque irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){ 
    console.log('Gato' && 'Cão')
} else {
    console.log('Falso')
}
//true