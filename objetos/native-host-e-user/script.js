// Liste 5 objetos nativos
Object
String
Array
Function
Number

//Liste 5 objetos do browser
window
alert
history
Document
HTMLAllCollection
NodeList

//Liste 2 métodos, propriedades ou objeto
// presentes no chorme que não existem no firefox
if(typeof document.webkitHidden !== "undefined"){
    console.log('Existe')
}else{
    console.log('Não existe')
}