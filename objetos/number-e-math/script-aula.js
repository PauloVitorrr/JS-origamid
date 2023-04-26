console.log(Number.isNaN('ds'));
console.log(Number.isInteger(10.4343434));

console.log(parseFloat('  32434.343'));
console.log(parseFloat('100.27 reais'));
console.log(parseInt('100.27 reais', 10));
console.log(parseInt(23.49, 10));

const preco = 10.32323;
console.log(preco.toFixed())

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor)
console.log(Math.PI)


const aleatorio = Math.floor(Math.random() * 500)

console.log(aleatorio)

// Formula para sortear um numero entre x e y
Math.floor(Math.random() * (max - min + 1)) + 1;