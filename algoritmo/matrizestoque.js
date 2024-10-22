// Matriz de estoque
const prompt = require("prompt-sync")();
const estoque = [
    { produtoId: 1, quantidadeDisponivel: 100 },
    { produtoId: 2, quantidadeDisponivel: 50 },
    { produtoId: 3, quantidadeDisponivel: 30 },
    { produtoId: 4, quantidadeDisponivel: 20 },
    { produtoId: 5, quantidadeDisponivel: 10 },
];

// Função para exibir o menu
function menu() {
    let opcao;
    do {
        opcao = prompt(`Escolha uma opção:
        1 - Adicionar produto
        2 - Excluir produto
        3 - Pesquisar produto
        4 - Exibir estoque
        5 - Sair`);
        
        switch (opcao) {
            case '1':
                adicionarProduto();
                break;
            case '2':
                excluirProduto();
                break;
            case '3':
                pesquisarProduto();
                break;
            case '4':
                exibirEstoque();
                break;
            case '5':
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
}

// Função para adicionar um produto no estoque
function adicionarProduto() {
    const produtoId = parseInt(prompt("Digite o ID do novo produto:"));
    const quantidadeDisponivel = parseInt(prompt("Digite a quantidade disponível do novo produto:"));

    if (!isNaN(produtoId) && !isNaN(quantidadeDisponivel)) {
        estoque.push({ produtoId, quantidadeDisponivel });
        alert(ProdutocomID , {produtoId} , ("adicionado ao estoque"))
    } else {
        alert("Valores inválidos. Tente novamente.");
    }
}

 menu()