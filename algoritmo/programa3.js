let contador = 0;

for (let i = 1; i <= 28; i++) {
    if (i % 3 === 0) {
        contador++;
    }
}

console.log("Quantidade de múltiplos de 3 entre 1 e 28 é" , contador)