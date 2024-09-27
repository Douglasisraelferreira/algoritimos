const prompt= require("prompt-sync")()
const expr = prompt("escolha uma fruta")
switch (expr) {
case 'oranges':
console.log('oranges are $0.59 a pound.');
break;
case 'mangoes':
case 'papayas':
console.log('mangoes and papayas are $2.79 a pound.');
break;
case 'bergamota':
console.log('bergamota custa 2')
break;
case 'banana':
console.log('a banana custa 3')
break;
default:

console.log('sorry, we are out of,', expr);
break;
}