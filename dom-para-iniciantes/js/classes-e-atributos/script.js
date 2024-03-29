//Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) =>{
    item.classList.add('ativo')
})

//remova a classe ativo de todas os itens do menu e matenha apenas no primeiro
itensMenu.forEach((item) =>{
    item.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
    const possuiAtributo = img.hasAttribute('alt')
    console.log(possuiAtributo)
})

//modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/')

console.log(link)