/*Exercicio 1
Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. 
Faça programas para:

let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);

*/

/*Exercicio 2
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis 
com os valores que serão comparados.

let a = 12
let b = 10

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

*/

/*Exercicio 3 
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis 
com os valores que serão comparados.


let a = 33
let b = 22
let c = 14

if ( a > b && a > c) {
    console.log(a)
} else if ( b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

*/

/*Exercicio 4 
Faça um programa que, dado um valor definido numa variável, retorne "positive" 
se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let a = 28

if (a > 0 ) {
    console.log("positive")
} else if (a === 0) {
    console.log("zero")
} else {
    console.log("negative")
}

*/

/*Exercicio 5
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
OBS: Um ângulo será considerado inválido se não tiver um valor positivo.


let a = 45
let b = 45
let c = 45

let soma = a + b + c;

if ( soma === 180) {
    console.log("true")
} else if (soma > 180) {
    console.log("false")
} else {
    console.log("ERRO")
}

*/

/* Exercicio 6

Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals */











/* Algoritmos:

Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16": 

let fruits = [3, 4, 3, 1, 2];

var soma = 0;

for (var index = 0; index < fruits.length; index += 1) {
    soma += fruits[index];
}
if (soma > 15) {
    console.log(soma)
} else {
    console.log('valor menor que 16');
}

*/

let n = 5
    for(var index = 0; index < n; index += 1) {
      '*'.repeat(n)
    }


    