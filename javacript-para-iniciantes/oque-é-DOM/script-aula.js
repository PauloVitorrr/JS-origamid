const h1Selecionado = document.querySelector('h1')

const h1Classes = h1Selecionado.classList

function teste(){
    console.log('clickou emm', h1Selecionado.innerHTML)
}

h1Selecionado.addEventListener('click', teste)