const prompt = require("prompt-sync")();
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

function adicionarPais(pais, populacao) {
    paises.push([pais, parseInt(populacao)]);
}

function pesquisarPais(pais) {
    const paisEncontrado = paises.find(p => p[0].toLowerCase() === pais.toLowerCase());
    if (paisEncontrado) {
        console.log("País encontrado: " + paisEncontrado[0] + " (" + paisEncontrado[1] + " habitantes)");
    } else {
        console.log("País não encontrado.");
    }
}

function apagarPais(pais) {
    const indice = paises.findIndex(p => p[0].toLowerCase() === pais.toLowerCase());
    if (indice !== -1) {
        paises.splice(indice, 1);
        console.log("País removido com sucesso.");
    } else {
        console.log("País não encontrado.");
    }
}

let paisComMaisHabitantes = 0;
let maiorPopulacao = 0;

for (let i = 0; i < paises.length; i++) {
    for (let j = 0; j < paises.length; j++) {
        if (paises[j][1] > maiorPopulacao) {
            maiorPopulacao = paises[j][1];
            paisComMaisHabitantes = paises[j][0];
        }
    }
}

paises.sort(([ , populacaoA], [ , populacaoB]) => populacaoB - populacaoA);
console.table(paises);
console.log("Maior população: " + paisComMaisHabitantes + " (" + maiorPopulacao + " habitantes)");

let adicionarpais = prompt("Adicionar país: ");
let adicionarpopulacao = prompt("Adicionar população: ");
adicionarPais(adicionarpais, adicionarpopulacao);

console.table(paises);

let pesquisar = prompt("Pesquisar país: ");
pesquisarPais(pesquisar);

let apagar = prompt("Apagar país: ");
apagarPais(apagar);

console.table(paises);