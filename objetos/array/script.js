const comidas = ['Pizzas', 'Frango', 'Carne', 'Macarrão'];
//remova o primeiro valor de comidas e coloque em uma variavel      
const primeiroElemento = comidas.shift()
console.log(primeiroElemento)
//remova o último valor de comidas e coloque em uma variavel
const ultimoElemento = comidas.pop()
console.log(ultimoElemento)
//adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
//adcione 'peixe' e 'batata' ao inicio da array
comidas.unshift('peixe', 'batata')
console.log(comidas)


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
//Arrume os estudantes em ordem alfabéticas
estudantes.sort()
console.log(estudantes)
//Inverta a ordem dos estudantes
const invertido = estudantes.slice(0).reverse()
console.log(invertido)
//Verifique se joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))
//Verifique se juliana faz parte dos estudantes
console.log(estudantes.includes('juliana'))


let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contatos</div>
            </section>`

//substitua section por ul e div com li,
html = html.split('section')
//utilizando split e join
html = html.join('ul')  

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
//remova o último carro, mas antes de remover
//salve a array original em outra váriavel

const carrosCopia = carros.slice()

carros.pop()

console.log(carros)
console.log(carrosCopia)