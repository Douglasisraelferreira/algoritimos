const prompt = require("prompt-sync")();

const texto = prompt("digite o texto:")

console.log("escolha a opcao desejada")

console.log("[1] - exibir quantos caractere tem no texto ")
console.log("[2] - substituir caractere")

const opcao = prompt("digite a opcao desejada:")



switch(opcao){
    case "1":
        console.log("o texto possui " + texto.length + " caracteres")
        break

    case "2":
        const troca = prompt("digite a palavra que deseja trocar:")
        const substitui = prompt("digite a palavra que substitui:")
        const textomodificado = texto.replaceAll(troca, substitui)
        console.log("textooriginal: " + texto + "\ntexto modificado:" + textomodificado)
        break

    default:
        console.log("digite uma opcao valida")

}



















