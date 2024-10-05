let palavras= ["peixe","elefante","gato"]
let maior = []
for (let i=0; i< palavras.length;i++){
    if (palavras[i].length > maior.length){
        maior = palavras[i]
}
}
    console.log ("a maior palavra é: " , maior)