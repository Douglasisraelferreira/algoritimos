const prompt = require("prompt-sync")()
let quantidade = 5
let total = 0
let contador = 0
let numero=0
for (let i = 0; i < quantidade; i++) {
 numero=  parseFloat(prompt("Insira o número "));
    contador++;

        
     total += numero
}

const media = total / contador;
console.log("a soma dos numeros é;", total);
console.log("a media dos numeros é:" , media);