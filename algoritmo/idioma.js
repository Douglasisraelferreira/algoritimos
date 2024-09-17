console.log('selecione o idioma')
console.log(' portugues')
console.log('ingles')
console.log('espanhol')
console.log('frances')
const prompt = require ('prompt-sync')()
const idioma = prompt ('selecione o idioma')
switch (idioma) {
case 'portugues':
console.log('idioma configurado para portugues')
break;
case 'inglish':
console.log('language set to inglish')
break;
case 'espanhol':
console.log('idioma configura a espanhol')
break;
case 'frances':
console.log('langue definie sur ler francais')
break;
default:
console.log('idioma nao definido', idioma)
break;
}