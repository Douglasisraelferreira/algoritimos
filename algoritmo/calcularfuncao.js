const prompt = require('prompt-sync')()
function calculadora() {

    const calcular = prompt('digite a operacao desejada')
    const num1 = parseInt(prompt('digite o primeiro numero'))
    const num2=parseInt(prompt('digite o segundo numero') )
    switch (calcular) {
    case '+':
    const soma= num1+num2
    console.log('a soma e ',soma)
    break;
    case '-':
    const subtracao=  num1-num2
    console.log('a subtracao e',subtracao)
    break;
    case '*':
    const mult= num1*num2
    console.log('a multiplicacao e',mult)
    break;
    case '/':
    if (num2==0)
    console.log('valor invalido')
    else
    {
    const divisao=num1/num2

    console.log('a divisao e ',divisao)
    } 

    break;
    default:
    console.log('tente novamente',calcular)
    calculadora()

    }
 
}
calculadora()