// Crie uma array com os anos que o Brasil ganhou a copa 
//1959, 1962, 1970, 1994, 2002

var campeao = [1959, 1962, 1970, 1994, 2002]

//intereja com o array utilizando o loop, para mostrar no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'

for(i = 0; i <= campeao.length; i++){
    console.log(`O brasil ganhou a copa de ${campeao[i]}`)
}

//Interaja com um loop nas frutass abaixo e pare ao chegar  em pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']

for(i = 0; i <= frutas.length; i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera'){
        break
    }
}

//coloque a última fruta do array acima em uma variavel, sem remover a mesma da array;
var ultimaFruta = frutas[frutas.length - 1]