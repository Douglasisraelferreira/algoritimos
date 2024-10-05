const vendas = [250, 400, 150, 300, 600, 200, 550];

const maiorValor = Math.max(...vendas);

const soma = vendas.reduce((acc, venda) => acc + venda, 0);
const media = soma / vendas.length;


console.log("Maior valor vendido:", maiorValor);
console.log("Média dos valores vendidos:", media);