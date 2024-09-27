const prompt = require ("prompt-sync")()

console.log("seja bem vindo")
console.log("pesquisar")

console.log(" marque seu horario")
console.log("2 ver agendamentos")
console.log("3 entre em contato via whatsapp")
console.log("4 ver formas de pagamento")
console.log("5 suporte tecnico")
console.log("6 configuraçoes")

const menu = prompt("escolha sua opçao")
function marqueseuhorariomenu(){
    console.log("marque seu horario")
    console.log("1 horario 10:40 ")
    console.log("2 horario 11:00 ")
    console.log("3 horario 11:20 ")
    console.log("4 horario 13:30 ") 
    const menuhorario1 = prompt("escolha seu horario")
   menuhorario(menuhorario1)
    console.log("obrigado volte sempre" )
}
function menuhorario(horario){

    console.log("voce escolheu o horario",horario)
}
function veragendamentosmenu(){
    console.log(" ver agendamentos")
    console.log("1 consultar agendamentos ")
    console.log("2 agendamentos concluidos")
}
function entreemcontatowhatsappmenu(){
    console.log(" entre em contato")
    console.log("1 51980459975")
}
function verformasdepagamentomenu(){
    console.log(" ver formas de pagamentos")
    console.log("1 cartao de credito ate 18x ")
    console.log(" 2cartao de debito ")
    console;log("3 pix")
}
function suportemenu(){
    console.log(" suporte tecnico")
    console.log("1 entre em contato ")
    console.log("2 email")
    console.log("3 telefone residencial")
    console.log("4whatsapp") 
}
function configuracoesmenu(){
    console.log(" configuracao")
    console.log("1 senhas")
    console.log("2 login usuario")
    console.log("3 segurança") 
}

switch (menu) {
case "1":
    marqueseuhorariomenu()
break;

case "2":
    veragendamentosmenu()
break;

case "3":
    entreemcontatowhatsappmenu()
break;

case "4":
    verformasdepagamentomenu()
break;

case "5":
    suportemenu()
break;

case "6":
    configuracoesmenu()
break;




}