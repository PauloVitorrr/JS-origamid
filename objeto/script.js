//crie um objeto com os seus dados pessoas
//deve possuir pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Paulo ',
    sobrenome: 'Sousa',
    idade: 19,
    profissao: 'Developer',
}

//crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function(){
    return this.nome + this.sobrenome
}
//modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

//crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    nome: 'Thor',
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem'){
            return 'latir'
        } else {
            return 'Nada'
        }
    }
}