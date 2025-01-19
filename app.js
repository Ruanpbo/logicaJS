let nome = prompt("Qual seu nome? ")

alert(`Bem vindo ao jogo ${nome}`);

let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute;
let tentativas =1;

while (chute != numeroSecreto){

    chute = prompt("Escolha um numero de 0 a 10");

    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let txt = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${txt}`) 

/*
if (tentativas > 1){
    alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
    */
