const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item,index,array) =>{
    console.log(item.toUpperCase(), index,array)
})

const li = document.querySelectorAll('li')

const retornoForeach = li.forEach((item,index) =>{
    item.classList.add('ativa' + index)
})

console.log(retornoForeach) // retorna undefined 