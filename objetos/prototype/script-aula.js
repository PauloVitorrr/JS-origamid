function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade; 
}
const andre = new Pessoa('André', 28)

Pessoa.prototype.andar = function(){
    return this.nome + ' Andou'
}

Pessoa.prototype.nadar = function(){
    return this.nome + ' Nadou'
}

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

const pais = 'Brasil'
const cidade = new String('Rio')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')

const listaArray = Array.prototype.slice.call(lista)