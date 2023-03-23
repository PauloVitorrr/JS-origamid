// const img = document.querySelector('img')

// function callback(event){
//     console.log(event)
// }

// img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event){
    console.log(event.currentTarget)
    console.log(event.target)
}

// animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
    event.preventDefault();
    // console.log(event)
    console.log(this.getAttribute('href'))
    console.log(event.currentTarget)
}

// linkExterno.addEventListener('click', handleLinkExterno)
const h1 = document.querySelector('h1')

function handleEvent(event){
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)

const imgs = document.querySelectorAll('img')

function handleImg(event){
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
})