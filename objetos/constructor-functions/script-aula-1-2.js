function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new Carro ('Honda', 1800)
const fiat = new Carro ('Fiat', 3000)

function Carro2(marca, precoInicial){
    this.taxa = 1.2
    this.marca = marca
    this.precoFinal = precoInicial * taxa
    this.preco = this.precoFinal
}

const mazda = new Carro2("Mazda", 5000)

const Dom = {
    seletor: 'li',
    element(){
        return document.querySelector(this.seletor)
    },
    ativar(){
        this.element().classList.add('ativar')
    }
}

function Dom(){
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativar = function(classe){
        this.element().classList.add(classe)
    }
}

const li = new Dom('li')
const ul = new Dom('ul')

const lastLi = new Dom ('li:last-child')
lastLi.ativar('ativar')