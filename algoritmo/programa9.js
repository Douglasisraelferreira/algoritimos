let contador = 0

for (let i = 1; i <= 29; i++) {
    let numerostring =i.toString()
    
        if (numerostring.search("9") !==-1)
             {
            contador++
        }
        
    
}

console.log("A quantidade de 9 é " , contador)