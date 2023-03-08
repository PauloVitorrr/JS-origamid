
// var ultimoItem = videoGames.pop()

for(var numero = 0; numero <= 4; numero++){
    console.log(numero)
}

var i = 0

while (i <= 5){ 
    console.log(i)
    i++
}

var videoGames = ['Switch', 'PS4', 'XBOX']

for(item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4'){
        break
    }
}

var frutas = ['banana', 'pera', 'maçã', 'abacaxi', 'uva']

frutas.forEach(function(fruta,i){
    console.log(fruta, i)
})