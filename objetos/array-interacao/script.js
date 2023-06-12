//Selecione cada curso e retorne uma array 
//com objetos contendo o titulo, descricao,
//aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText
    const descricao = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText
    
    return{
        titulo,
        descricao,
        aulas,
        horas
    }
})

// console.log(objetosCurso)

//retorne uma lista com os 
//numeros maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33]
const maioresQue100 = numeros.filter(n => n > 100)

// console.log(maioresQue100)

// Verifique se baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) =>{
    return item === 'Baixo';
})

// console.log(possuiBaixo)

//retorne o valor total das compras 
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const somaPreco = compras.reduce((acumulador, atual) => {
    const PrecoFormatado = +atual.preco.replace('R$', '').replace(',' , '.')
    return PrecoFormatado + acumulador
}, 0)

console.log(somaPreco)