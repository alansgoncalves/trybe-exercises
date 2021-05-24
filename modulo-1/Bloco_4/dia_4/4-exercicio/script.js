// Conceitos de Funções

// Funçoes, são blocos de código que encapsulam instruções que executam uma tarefa específica.
// Visam dividir um programa em partes menores, em que essas partes menores tenham uma única responsabilidade.

// Exercicios de fixação:
// Funções de um carro:

// Ligar e desligar o carro

let statusCarro = 'desligado';

function ligarDesligar () {
  if (statusCarro === 'desligado') {
  statusCarro = 'ligado';
} else {
  statusCarro = 'desligado';
}
return statusCarro;
}

console.log(ligarDesligar('desligado'));


// Aceleração e frenagem do carro

let aceleracao = 0;

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;
  return 'Acelerando a ' + aceleracao + ' m/s2';
}
console.log(acelerar(100));


function frear(decremento) {
decremento = decremento - aceleracao;
return 'Desacelerando a ' + aceleracao + ' m/s2';
}
console.log(frear(30));


// Exercicios

// Adição
let a = 5;
let b = 2;

a + b;

//... se transforma em:

function sum(a, b) {
  return a + b;
}
console.log(sum(a, b))