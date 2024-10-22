
// Matriz de entregas
const entregas = [
    { id: 1, vendaId: 1, status: "Em Rota", dataPrevista: "2024-10-20" },
    { id: 2, vendaId: 2, status: "Pendente", dataPrevista: "2024-10-22" },
];

// Função para exibir o menu
function menu() {
    let opcao;
    do {
        opcao = prompt(`Escolha uma opção:
        1 - Procurar entrega
        2 - Adicionar entrega
        3 - Excluir entrega
        4 - Visualizar todas as entregas
        5 - Sair`);

        switch (opcao) {
            case '1':
                procurarEntrega();
                break;
            case '2':
                adicionarEntrega();
                break;
            case '3':
                excluirEntrega();
                break;
            case '4':
                visualizarEntregas();
                break;
            case '5':
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
}

// Função para procurar uma entrega
function procurarEntrega() {
    const entregaId = parseInt(prompt("Digite o ID da entrega que deseja procurar:"));

    const entrega = entregas.find(entrega => entrega.id === entregaId);
    if (entrega) {
        alert(Entrega ID: ${entrega.id}, Venda ID: ${entrega.vendaId}, Status: ${entrega.status}, Data Prevista: ${entrega.dataPrevista});
    } else {
        alert("Entrega não encontrada.");
    }
}

// Função para adicionar uma entrega
function adicionarEntrega() {
    const id = parseInt(prompt("Digite o ID da nova entrega:"));
    const vendaId = parseInt(prompt("Digite o ID da venda:"));
    const status = prompt("Digite o status da entrega:");
    const dataPrevista = prompt("Digite a data prevista da entrega (formato: YYYY-MM-DD):");

    if (validarEntrada(id, vendaId) && status && dataPrevista) {
        entregas.push({ id, vendaId, status, dataPrevista });
        alert(Entrega ID ${id} adicionada com sucesso.);
    } else {
        alert("Valores inválidos. Tente novamente.");
    }
}

// Função para excluir uma entrega
function excluirEntrega() {
    const entregaId = parseInt(prompt("Digite o ID da entrega a ser excluída:"));

    const index = entregas.findIndex(entrega => entrega.id === entregaId);
    if (index !== -1) {
        entregas.splice(index, 1);
        alert(Entrega ID ${entregaId} excluída.);
    } else {
        alert("Entrega não encontrada.");
    }
}

// Função para visualizar todas as entregas
function visualizarEntregas() {
    if (entregas.length === 0) {
        alert("Não há entregas cadastradas.");
    } else {
        let listaEntregas = "Lista de Entregas:\n";
        entregas.forEach(entrega => {
            listaEntregas += ID: ${entrega.id}, Venda ID: ${entrega.vendaId}, Status: ${entrega.status}, Data Prevista: ${entrega.dataPrevista}\n;
        });
        alert(listaEntregas);
    }
}

// Função para validar entradas numéricas
function validarEntrada(...valores) {
    return valores.every(valor => !isNaN(valor) && valor > 0);
}

// Executar o menu
menu();