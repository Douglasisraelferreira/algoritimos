const prompt = require("prompt-sync")();

// Produtos disponíveis
const produtos = [
    { id: 1, nome: "Insufilme GarvareBlack", preco: 50 },
    { id: 2, nome: "Insufilme GarvareBlack2", preco: 55 },
    { id: 3, nome: "Insufilme Cobalt", preco: 60 },
    { id: 4, nome: "Insufilme Linha PRO", preco: 70 },
    { id: 5, nome: "Insufilme Linha Premium", preco: 80 },
];

// Clientes cadastrados
let clientes = [];

// Vendas realizadas
let vendas = [];

// Funções do sistema
function cadastrarCliente() {
    const nome = prompt("Nome do cliente: ");
    const idade = parseInt(prompt("Idade do cliente: "));
    const cpf = prompt("CPF do cliente: ");

    if (idade < 18) {
        console.log("A idade deve ser maior que 18 anos.");
        return;
    }

    clientes.push({ nome, idade, cpf });
    console.log("Cliente cadastrado com sucesso!");
}

function realizarVenda() {
    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado.");
        return;
    }

    console.log("Escolha um cliente:");
    clientes.forEach((cliente, index) => {
        console.log(`${index + 1} - ${cliente.nome}`);
    });

    const clienteIndex = parseInt(prompt("Selecione o cliente: ")) - 1;
    const cliente = clientes[clienteIndex];

    console.log("Escolha um produto:");
    produtos.forEach((produto) => {
        console.log(`${produto.id} - ${produto.nome} - R$${produto.preco}`);
    });

    const produtoId = parseInt(prompt("Selecione o produto: "));
    const quantidade = parseInt(prompt("Quantidade: "));
    
    const total = produtos.find(prod => prod.id === produtoId).preco * quantidade;
    
    vendas.push({ cliente, produtoId, quantidade, total });
    console.log(`Venda realizada: ${cliente.nome} comprou ${quantidade} de produto ${produtoId} por R$${total}.`);
}

function rastrearEntrega() {
    console.log("Rastreamento de entregas:");
    vendas.forEach((venda, index) => {
        console.log(`${index + 1} - Cliente: ${venda.cliente.nome}, Produto ID: ${venda.produtoId}, Total: R$${venda.total}`);
    });
}

function menuPrincipal() {
    let opcao;
    do {
        console.log("------ INSULFILMES AUTO CENTER ------");
        console.log("1 - Cadastrar Cliente");
        console.log("2 - Realizar Venda");
        console.log("3 - Rastrear Entrega");
        console.log("0 - Sair");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                cadastrarCliente();
                break;
            case "2":
                realizarVenda();
                break;
            case "3":
                rastrearEntrega();
                break;
            case "0":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== "0");
}

menuPrincipal();
