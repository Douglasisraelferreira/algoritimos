function contarPrimos() {
    let contador = 0;

    for (let num = 2; num <= 100; num++) {
        let primo = true;
    
        for (let i = 2; i <= Math.sqrt(num); i++) {
            
            if (num % i === 0) {
               primo = false;
                break;
            }
        }

        if (primo) {   
            contador++;
        console.log(num)
    
        }
    }

    return contador;
}
const totalPrimos = contarPrimos();
console.log(" números primos de 0 a 13");
console.log("total de numeros primos" , totalPrimos);

