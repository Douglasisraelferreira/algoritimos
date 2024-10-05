let palavras = ["casa", "café", "livro", "senac", "programador"]
let quantidade = 0

for (let i = 0; i < palavras.length; i++) {
quantidade += palavras[i].length
 
console.log(palavras[i] + " tem " + palavras[i].length + " letras ")

}
console.log ("total" ,quantidade)