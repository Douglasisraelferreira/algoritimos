let soma = 0;
let contador = 0 
for (let i = 1; i <= 20; i++) {
    soma += i;
contador++;
}

let media = soma / contador;

console.log("A soma dos números de 1 a 20 é:", soma);
console.log("A média dos números de 1 a 20 é:", media);