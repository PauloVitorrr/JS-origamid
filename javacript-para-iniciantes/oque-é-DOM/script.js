//Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href
console.log(hrefPagina)

//Seleciona o primeiro elemento da pagina que possua a classe  ativo
const elementoAtivo = document.querySelector('.ativo')

//retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)

//retorne a largura da janela
const windowWidth = window.innerWidth;
console.log(windowWidth)