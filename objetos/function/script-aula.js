// const perimetro = new Function('lado', 'return lado * 4')

// function somar(n1, n2, n4){
//     return n1 + n2  
// }

// console.log(somar.name)

// function darOi(){
//     console.log('Oi para voce')
// }

// darOi.call(null, 'André', 28)

// window.marca = 'Carro'
// window.ano = 288

// function descricaoCarro(velocidade){
//     console.log(this)
//     console.log(this.marca + ' ' + this.ano + velocidade)
// }

// descricaoCarro.call({marca:'Honda', ano: 2015}, 100)

const carros = ['Ford', 'Fiat', 'VW']
const frutas = ['Banana', 'Uva', 'Pêra']

carros.forEach.call(frutas, (item) =>{
    console.log(item)
})

function Dom(seletor){
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe){
    this.element.classList.add(classe)
}

const ul = new Dom('ul')

// const li = {
//     element: document.querySelector('li')
// }



// ul.ativo.call(li, 'ativo')

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    3: 'Item 4',
    length: 3,
}

const li = document.querySelectorAlll('li')
const arrayLi = Array.from(li)

const filtro = Array.prototype.filter.bind(li, (item)=>{
    return item.classList.contains('Ativo')
})

console.log(filtro)

console.log(li)

const numeros = [33, 222, 2141, 454, 784, 454]
Math.max.apply(null, nu)