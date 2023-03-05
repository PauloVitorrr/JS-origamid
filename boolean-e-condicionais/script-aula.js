
var possuiDoutorado = false

if(possuiGraduacao) { 
    console.log("É verdadeiro")
} else if(possuiDoutorado){
    console.log("Voce possui graduação e doutorado!!")
} else {
    console.log("Não possui nada")
}

var nome = '10kg' / 10

if(nome) {
    console.log("Isso é válido")
    console.log(nome)
} else {
    console.log("Isso não é válido")
}

var possuiGraduacao = false

if(!possuiGraduacao) {
    console.log(possuiGraduacao)
    console.log("Não possui graduação!!!!!!!!")
} else {
    console.log("FAlseeeeeeeeee")
}

 var x = 10

 console.log(x !== 10)

 if((5 - 5 ) && (5 + 5)){
    console.log('Verdadeiro')
 } else {
    console.log('Falso')
 }

 // retorna o 1° falsoque encontra = &&

 var condicional = (5 - 10) && (5 + 5);

 if (condicional) {
    console.log('Verdadeiro', condicional)
 } else {
    console.log('Falsos')
 }

 //retorna o primeiro true que encontrar || 

 var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)

 console.log(condicional2)