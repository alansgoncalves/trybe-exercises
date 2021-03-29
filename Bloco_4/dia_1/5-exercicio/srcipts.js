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
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals 

let chess = "PAwne";
chess = chess.toLowerCase();

switch (chess) {
    case 'queen':
        console.log("move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
    break;
    case 'king':
        console.log("movee-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez");
    break;
    case 'bishop':
        console.log("move-se ao longo da diagonal. Não pode pular outras peças");
    break;
    case 'horse':
        console.log("move-se em forma de L, duas casas em sentido horizontal e mais uma na vertical ou vice-versa");
    break;
    case 'rook':
        console.log("move-se pela vertical ou horizontal, mas não pode pular outras peças");
    break;
    case 'pawn':
        console.log("move-se apenas uma casa para frente e somente captura outras peças na diagonal");
    break;
    default:
        console.log(["ERRO"]);
    break;
}

*/

/* Exercicio 7

Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


let grade = -12;

if (grade >= 90 && grade < 101) {
    console.log("grade A")
} else if (grade >= 80 && grade < 89) {
    console.log("grade B")
} else if (grade >= 70 && grade < 79) {
    console.log("grade C")
} else if (grade >= 60 && grade < 69) {
    console.log("grade D") 
} else if (grade >= 50 && grade < 69) {
    console.log("grade E")
} else if (grade < 49 && grade >= 0) {
    console.log("grade F")
} else {
    console.log("Erro")
}

*/


/* Exercicio 8
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if .

let a = 3
let b = 1
let c = 9

if ( a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    console.log("true");
} else {
    console.log("false");
}
*/

/* Exercicio 9
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

Bonus: use somente um if .

let a = 3
let b = 4
let c = 6

if ( a % 2 === 1 || b % 2 === 1 || c % 2 === 1){
    console.log("true");
} else {
    console.log("false");
}

*/

/* Exercício 10
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) 

let valorCusto = 0
let valorVenda = 120
let impostoSobreOCusto = 20

let valorCustoTotal = valorCusto + ( valorCusto * 0.20); // porcentagem de 20%, multiplique sem por 0.20 
let lucro = valorVenda - valorCustoTotal
if (valorCusto <= 0 || valorVenda <= 0 ) {
console.log("Erro, informe um valor maior que 0"); 
} else {
    console.log('Seu lucro é de ' + lucro)
}

*/

let salary = 7885.65

let inss8 = 0.08
let inss9 = 0.09
let inss11 = 0.11
let inssGross = 570.88

let ir7 = 0.075
let ir15 = 0.15
let ir22 = 0.225
let ir27 = 0.275



if (salary <= 1556.94 && salary >= 1100.00) {
    let baseSalary = salary - (salary * inss8);
    let liquidSalary = baseSalary;
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2) + ' isento de IR');

} else if (salary >= 1556.95 && salary <= 2594.92 ) {
    let baseSalary = salary - (salary * inss9)
    let ir = baseSalary * ir7 
    let calcIr = ir - 142.80
    let liquidSalary = baseSalary - calcIr
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2));

} else if (salary >= 2594.93 && salary <= 3176.01 ) {
    let baseSalary = salary - (salary * inss11)
    let ir = baseSalary * ir7 
    let calcIr = ir - 142.80
    let liquidSalary = baseSalary - calcIr
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2));

} else if (salary >= 3176.01 && salary <= 4214.66 ) {
    let baseSalary = salary - (salary * inss11)
    let ir = baseSalary * ir15 
    let calcIr = ir - 142.80
    let liquidSalary = baseSalary - calcIr
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2));

} else if (salary >= 4214.67 && salary <= 5189.82 ) {
    let baseSalary = salary - (salary * inss11)
    let ir = baseSalary * ir15 
    let calcIr = ir - 354.80
    let liquidSalary = baseSalary - calcIr
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2));

} else if (salary > 5189.82 ) {
    let baseSalary = salary - inssGross
    let ir = baseSalary * ir22 
    let calcIr = ir - 636.13
    let liquidSalary = baseSalary - calcIr
    console.log('Seu salário líquido é de ' + (liquidSalary).toFixed(2));
} else {
    console.log('Salário insuficiente para cálculo');
}

