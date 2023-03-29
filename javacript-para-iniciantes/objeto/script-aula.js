var pessoa = {
    nome: 'André',
    idade: 28
}

console.log(pessoa.idade)   

var quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(4))

console.log(Math.PI)

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeigth(){
        return this.height / 2
    }
}

menu.backgroundColor = '#fff'
menu.color = 'blue'
menu.esconder = function(){
    console.log('escondido estou!!')
}
var bg = menu.backgroundColor