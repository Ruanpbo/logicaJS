let nome = prompt("Qual seu nome? ")

alert(`Bem vindo ao jogo ${nome}`);

let numeroSecreto = 5;
let chute;
let tentativas =1;

while (chute != numeroSecreto){

    chute = prompt("Escolha um numero de 1 a 10");

    if (chute == numeroSecreto){
        alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}