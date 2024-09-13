const prompt = require("prompt-sync")();''
const texto = prompt("digite a palavra:")
const textomodificado = texto.replaceAll("a", "?")
console.log("textooriginal: " + texto + "\ntexto modificado:" + textomodificado)