//Cria uma função construtora de Pessoas
//Deve conter nome, sobrenome e idade
//Crie um método no protótipo que retorne
// o nome completo de pessoa
function Pessoa(nome,sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + this.sobrenome
}

const yasmin = new Pessoa ('Yasmin', 'mendes', 22)
console.log(yasmin.nomeCompleto())

//Liste os métodos acessados por
//dados, criados com nodelist,
//htmlCollection, document

//NodeList.prototype
//htmlCollection.prototype
//document.prototype

//Liste os construtores dos dados abaixo
const li = document.querySelector('li')

li; //'HTMLLIElement'
li.click;//função 
li.innerText; //String
li.value;//Number
li.hidden;//boolean
li.offsetLeft;//number
li.click();//undefined

//qual o construtor do dado abaixo:
li.hidden.construtor.name //String