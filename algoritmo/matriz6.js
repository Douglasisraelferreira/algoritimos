// Matriz de produtos
const produtos = [
    { id: 1, nome: "Insufilme GarvareBlack", preco: 50 },
    { id: 2, nome: "Insufilme GarvareBlack2", preco: 55 },
    { id: 3, nome: "Insufilme Cobalt", preco: 60 },
    { id: 4, nome: "Insufilme Linha PRO", preco: 70 },
    { id: 5, nome: "Insufilme Linha Premium", preco: 80 },
];

// Matriz de clientes
const clientes = [
    { id: 1, nome: "João Silva", idade: 30, cpf: "123.456.789-00", compras: 6, cupomDesconto: true },
    { id: 2, nome: "Maria Oliveira", idade: 25, cpf: "987.654.321-00", compras: 4, cupomDesconto: false },
];

// Matriz de vendas
const vendas = [
    { id: 1, clienteId: 1, produtoId: 2, quantidade: 3, total: 165, pagamento: "Pix", status: "Concluída" },
    { id: 2, clienteId: 2, produtoId: 1, quantidade: 1, total: 50, pagamento: "Cartão", status: "Pendente" },
];

// Matriz de entregas
const entregas = [
    { id: 1, vendaId: 1, status: "Em Rota", dataPrevista: "2024-10-20" },
    { id: 2, vendaId: 2, status: "Pendente", dataPrevista: "2024-10-22" },
];

// Matriz de estoque
const estoque = [
    { produtoId: 1, quantidadeDisponivel: 100 },
    { produtoId: 2, quantidadeDisponivel: 50 },
    { produtoId: 3, quantidadeDisponivel: 30 },
    { produtoId: 4, quantidadeDisponivel: 20 },
    { produtoId: 5, quantidadeDisponivel: 10 },
];

// Função para exibir produtos
function mostrarProdutos() {
    console.log("Produtos disponíveis:");
    produtos.forEach(produto => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: R$${produto.preco}`);
    });
}

// Função para exibir clientes
function mostrarClientes() {
    console.log("\nClientes cadastrados:");
    clientes.forEach(cliente => {
        console.log(`ID: ${cliente.id}, Nome: ${cliente.nome}, Idade: ${cliente.idade}, CPF: ${cliente.cpf}, Compras: ${cliente.compras}, Cupom: ${cliente.cupomDesconto}`);
    });
}

// Função para exibir vendas
function mostrarVendas() {
    console.log("\nVendas realizadas:");
    vendas.forEach(venda => {
        console.log(`ID: ${venda.id}, Cliente ID: ${venda.clienteId}, Produto ID: ${venda.produtoId}, Quantidade: ${venda.quantidade}, Total: R$${venda.total}, Pagamento: ${venda.pagamento}, Status: ${venda.status}`);
    });
}

// Função para exibir entregas
function mostrarEntregas() {
    console.log("\nEntregas:");
    entregas.forEach(entrega => {
        console.log(`ID: ${entrega.id}, Venda ID: ${entrega.vendaId}, Status: ${entrega.status}, Data Prevista: ${entrega.dataPrevista}`);
    });
}

// Função para exibir estoque
function mostrarEstoque() {
    console.log("\nEstoque:");
    estoque.forEach(item => {
        const produto = produtos.find(p => p.id === item.produtoId);
        console.log(`Produto: ${produto.nome}, Quantidade Disponível: ${item.quantidadeDisponivel}`);
    });
}

// Chamadas das funções para exibição
mostrarProdutos();
mostrarClientes();
mostrarVendas();
mostrarEntregas();
mostrarEstoque();
