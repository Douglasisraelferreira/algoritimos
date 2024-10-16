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

let paisComMaiorPopulacao = "";
let maiorPopulacao = 0;

// Primeiro, verifica se a China está no array
for (let i = 0; i < paises.length; i++) {
    if (paises[i][0] === "China") {
        maiorPopulacao = paises[i][1];
        paisComMaiorPopulacao = paises[i][0];
        break; // Sai do loop após encontrar a China
    }
}

// Em seguida, verifica os outros países
for (let j = 0; j < paises.length; j++) {
    if (paises[j][1] > maiorPopulacao) {
        maiorPopulacao = paises[j][1];
        paisComMaiorPopulacao = paises[j][0];
    }
}

console.log("Maior população: " + paisComMaiorPopulacao + " (" + maiorPopulacao + " habitantes)");
console.table(paises)