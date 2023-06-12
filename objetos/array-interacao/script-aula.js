// const carros = ['Ford', 'Fiat', 'Honda']

// carros.forEach((item,index,array) =>{
//     console.log(item.toUpperCase(), index,array)
// })

// const li = document.querySelectorAll('li')

// const retornoForeach = li.forEach((item,index) =>{
//     item.classList.add('ativa' + index)
// })

// console.log(retornoForeach) // retorna undefined    

// const carros = ['Ford', 'Fiat', 'Honda']

// const novaArray = carros.map((item,index,array) =>{
//     return item.toUpperCase()
// })

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);

// console.log(novaArray)
// console.log(carros)

// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const temposAulas = aulas.map(aula => aula.min);

// const nomeAulas = aula => aula.nome;

// const nomesAulas2 = function(aula){
//     return aula.nome
// }

// const arrayNomeAulas = aulas.map(nomeAulas)

// console.log(arrayNomeAulas)
// console.log(tempoAulas)

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
//     console.log(acumulador, item, index)
//     return acumulador + item;
// },33)

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//     if(anterior > atual)
//         return anterior
//     else 
//         return atual
// })

// console.log(maiorNumero)


// const aulas = [
//     {
//         nome: 'HTML 1',
//         min: 15
//     },
//     {
//         nome: 'HTML 2',
//         min: 10
//     },
//     {
//         nome: 'CSS 1',
//         min: 20
//     },
//     {
//         nome: 'JS 1',
//         min: 25
//     },
// ]

// const listaAulas = aulas.reduce((acumulador, aula, index) =>{
//     acumulador[index] = aula.nome
//     return acumulador
// }, {})

// const frutas = ['Banana', 'Pera', 'Uvas']

// const temUva = frutas.some((item) => {
//     return item === 'Uva';
// })

// console.log(temUva)