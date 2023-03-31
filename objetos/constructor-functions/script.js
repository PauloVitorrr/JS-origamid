//Transforme o objeto abaixo em um Construtor function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     anda(){
//         console.log(this.nome + 'andou')
//     }
// }
function pessoa(nome, idade) {
    this.nome = nome 
    this.idade = idade
    this.anda = function(){
        console.log(this.nome + 'andou')
    }
}

// Crie 3 pessoas, joão - 20anos,
// Maria - 25 anos, Bruna - 15 anos
const joao = new pessoa('João', 20) 
const maria = new pessoa ('Maria', 25)
const bruna = new pessoa ('Bruna', 15)

//Crie uma construtor function (dom), para manipulação
// de listas de elementos do dom, Deve contar as seguintes
//propiedade e métodos:
//
//
//elements, retorna Nodelist com os elmentos selecionados
//addClass(classe), adiciona a classe a todos os elementos
//removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClasse = function(){
        elementList.forEach((element)=>{
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((element) =>{
            element.classList.add(classe)
        })
    }
}

const listaItens = new Dom ('li')
const ul = new Dom ('ul')

listaItens.addClass('ativar')
ul.addClasse('ativar-ul')