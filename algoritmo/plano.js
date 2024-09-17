const prompt = require('prompt-sync')()
const plano = prompt ('escolha seu plano')
switch (plano) {
case 'basico':
console.log('plano basico acesso a filmes em 480p, 1 tela')
break;
case 'premium':
console.log('plano premium acesso a filmes em 1080p, 4 tela')
break;
case 'familiar':
console.log('plano familiar acesso a filmes em 4k, ate 6 telas simultaneas')
break;
default:
console.log('plano invalido',plano)
break;
}