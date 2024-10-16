const prompt = require("prompt-sync")()
const paises = [
    ["Brasil", 213993437],
    ["Estados Unidos", 331002651],
    ["China", 1439323776],
    ["Índia", 1380004385],
    ["Japão", 126476461],
    ["Alemanha", 83783942],
    ["França", 65273511],
    ["Reino Unido", 67886011],
    ["Itália", 60244639],
    ["Canadá", 37742154]
];
function adicionarPais(pais,populacao) {
    paises.push([pais, populacao])
}
let paisComMaishabitantes = 0;
let maiorPopulacao = 0;

for (let i = 0; i < paises.length; i++) {
    for (let j = 0; j < paises.length; j++) { 
        if (paises[j][1] > maiorPopulacao) {
            maiorPopulacao = paises[j][1];
            paisComMaishabitantes = paises[j] [0]
        } 
    }
}
paises.sort(([ , populacaoA], [ , populacaoB]) => populacaoB - populacaoA);
console.table(paises)
console.log("Maior população: " + paisComMaishabitantes + " (" + maiorPopulacao + " habitantes)")
let adicionarpais = prompt("adicionar pais ")
let adicionarpopulacao = prompt("adicionar populacao")

adicionarPais(adicionarpais , adicionarpopulacao)
console.table(paises)
