const prompt = require("prompt-sync")();
let opcao = 10;
const paises = [
    {nomePais: "Brasil", populacao: 213993437},
    {nomePais: "Estados Unidos", populacao: 331002651},
    {nomePais: "China", populacao: 1439323776},
    {nomePais: "Índia", populacao: 1380004385},
    {nomePais: "Japão", populacao: 126476461},
    {nomePais: "Alemanha", populacao: 83783942},
    {nomePais: "França", populacao: 65273511},
    {nomePais: "Reino Unido", populacao: 67886011},
    {nomePais: "Itália", populacao: 60244639},
    {nomePais: "Canadá", populacao: 37742154},
];

function adicionarPais(pais, populacao) {
    const paisExistente = paises.find(p => p.nomePais.toLowerCase() === pais.toLowerCase());
    if (paisExistente) {
        console.log("Erro: O país '" + pais + "' já existe.");
    } else {
        paises.push({nomePais: pais, populacao: Number(populacao)});
        console.log("País '" + pais + "' adicionado com sucesso.");
    }
}

function pesquisarPais(pais) {
    const paisEncontrado = paises.find(p => p.nomePais.toLowerCase() === pais.toLowerCase());
    if (paisEncontrado) {
        console.log("País encontrado: " + paisEncontrado.nomePais + " (" + paisEncontrado.populacao + " habitantes)");
    } else {
        console.log("País não encontrado.");
    }
}

function apagarPais(pais) {
    const indice = paises.findIndex(p => p.nomePais.toLowerCase() === pais.toLowerCase());
    if (indice !== -1) {
        paises.splice(indice, 1);
        console.log("País removido com sucesso.");
    } else {
        console.log("País não encontrado.");
    }
}

function mostrarPaises() {
    console.table(paises);
}

function mostrarMaiorPopulacao() {
    let paisComMaisHabitantes = paises[0];
    let maiorPopulacao = paises[0].populacao;

    for (let i = 1; i < paises.length; i++) {
        if (paises[i].populacao > maiorPopulacao) {
            maiorPopulacao = paises[i].populacao;
            paisComMaisHabitantes = paises[i];
        }
    }
    console.log("Maior população: " + paisComMaisHabitantes.nomePais + " (" + maiorPopulacao + " habitantes)");
}

function menu() {
    console.log("Menu:");
    console.log("1 - Mostrar países");
    console.log("2 - Adicionar país");
    console.log("3 - Pesquisar país");
    console.log("4 - Apagar país");
    console.log("5 - Mostrar país com maior população");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            mostrarPaises();
            break;
        case "2":
            let adicionarpais = prompt("Adicionar país: ");
            let adicionarpopulacao = prompt("Adicionar população: ");
            adicionarPais(adicionarpais, adicionarpopulacao);
            mostrarPaises();
            break;
        case "3":
            let pesquisar = prompt("Pesquisar país: ");
            pesquisarPais(pesquisar);
            break;
        case "4":
            let apagar = prompt("Apagar país: ");
            apagarPais(apagar);
            mostrarPaises();
            break;
        case "5":
            mostrarMaiorPopulacao();
            break;
        case "0":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

while (opcao != 0) {
    menu();
}
