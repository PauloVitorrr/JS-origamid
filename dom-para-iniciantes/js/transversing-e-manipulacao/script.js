//duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

//selecione o primeiro DT da dl de faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
//elecione o DD referente ao primeiro dt
const proximoDD = primeiroDt.nextElementSibling

console.log(proximoDD)
//substitua o conteudo html de faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML