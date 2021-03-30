
// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
// Percorra o array imprimindo todos os valores nele contidos com a função console.log():

// for (var index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }


// Exercício 2
// Somar todos os valores contidos no array e imprimir o resultado:

// let soma = 0;
// for (var index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index]
// }
// console.log(soma)


// Exercício 3
// Calcule e imprima a média aritmética dos valores contidos no array
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
//   var media = soma / numbers.length
// }
//   console.log(media);


// Exercício 4
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
//   var media = soma / numbers.length
// }
// if (media > 20) {
//   console.log('valor maior que 20');
// } else {
//   console.log('valor menor ou igual a 20')
// }


//Exercicio 5
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let result = 0;
// for(let index = 0; index < numbers.length; index += 1) {    //numbers.length = tamanho do array
//   if(numbers[index] > result) {   //number[index] = posiçoes do array [0], [1], [2], ....
//     result = numbers[index]
//   }
// }
// console.log(result);

// // Abaixo temo uma outra forma de obter o maior valor contido no array. Utilizando a função Math.max(...numbers)

//   let result1 = 0;

//   result1 = Math.max(...numbers);  // Math.max(...numbers) retorna o maior valor do array
//   console.log(result1);


// Exercicio 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let odd = 0;

// for(let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 == 1 ) {  
//     odd += 1;
//   }
// }
//   if ( odd > 0) { 
//     console.log(odd);
//   } else {
//     console.log("even number not found")
// }


// Exercicio 7
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let atual = 0;
// let smallestNumber = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     atual = numbers[index];
//     if (atual < numbers[index + 1]) {
//         smallestNumber = atual;
//     }
// }   
// console.log(smallestNumber);


// Exercicio 8
// Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

//  var result = [];

//  for(let index = 0; index < 25; index += 1) {
//     result.push(index + 1)
//  }
// console.log(result)


// Exercicio 9
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// var result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// for (let index = 0; index < result.length; index ++) {
//   console.log(result[index]/2);
// }
