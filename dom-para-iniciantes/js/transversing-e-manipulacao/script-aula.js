const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')
console.log(h1.innerHTML)
console.log(h1.outerHTML)

h1.outerHTML = '<p>Novo título</p>'

// console.log(animaisLista.innerHTML)

const lista = document.querySelector('.animais-lista')

console.log(lista.children[--lista.children.length])
console.log(lista.querySelector('li:last-child'))

console.log(lista.childNodes)

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

const mapa = document.querySelector('.mapa')

contato.replaceChild(lista, titulo)
