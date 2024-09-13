const prompt = require ("prompt-sync")()
const numerodousuario = parseInt(prompt("escolha um numero"))
const escolhadousuario= prompt("voce quer par ou impar?")
const numerodocomputador = Math.floor(Math.random()*10);
const soma = numerodousuario + numerodocomputador
console.log ("o numero do computador é:", numerodocomputador)
let  avaliacaosoma = 0
if (soma %2 ===0 )
{
console.log("o soma deu par")
avaliacaosoma ="par"
}
else
{
console.log("o soma deu impar")
avaliacaosoma ="impar"
}
if (escolhadousuario === avaliacaosoma){
console.log("parabens voce ganhou");
}
else 
console.log("voce perdeu! tente novamente");

console.log("a soma total e  : ", soma )
console.log(" usuario escolheu",avaliacaosoma)
