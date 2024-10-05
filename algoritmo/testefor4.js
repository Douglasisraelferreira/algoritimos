const prompt=require ("prompt-sync")()
listafruteira=["maçã" , "banana" , "leite" , "pão" , "arroz"]


function Menu(){

     console.log("Menu")

     console.log(" ")

     console.log(" 1 adicionar item")

     console.log(" 2 lista de itens")

     console.log(" 3 escolha sair")

const escolha = prompt("escolha um item")

switch(escolha){

    case "1":
    console.log("adicionar item")
    break;

    case"2":
    for (let i=0; i<listafruteira.length; i++){
     console.log(listafruteira[i])
    }

       Menu()

    break;

    case"3":
    console.log("sair")
    break;


     }
}
Menu()







