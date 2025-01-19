alert("Bem vindo ao jogo");
let numeroSecreto = 4;
let chute = prompt("Escolha um numero de 1 a 10");

if (chute == numeroSecreto){
    alert(`Você acertou o numero secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`)
    } else {
        alert(`O numero secreto é maior que ${chute}`)
    }
} 