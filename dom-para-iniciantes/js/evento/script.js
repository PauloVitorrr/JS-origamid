//quando o usúario clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais
// intens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]') 

function handleLink(event){
    // event.preventDefault()
    // linksInternos.forEach((link) =>{
    //     link.classList.remove('ativo')
    // })
    // this.classList.add('ativo')
    event.currentTarget.remove()
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', handleLink)
})

//utilizando o código anterior. ao invés de mostrar no console,
//remova o elemento que está sendo clicado, o método remove() remove o lemento

//se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event){
    console.log(event.key)
    if(event.key === 't'){
        document.documentElement.classList.toggle('textomaior')
    }
}