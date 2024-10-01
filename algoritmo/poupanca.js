let saldoInicial = 1000; 
let taxaRendimento = 0.005; 
let meses = 12; 


for (let i = 0; i < meses; i++) {
    saldoInicial += saldoInicial * taxaRendimento;
}
console.log("saldo inical 1000")
console.log("taxa de redimento 0.02%")
console.log("total de meses 12 ")
console.log("O saldo final após " + meses + " meses é: R$ " + saldoInicial.toFixed(2));