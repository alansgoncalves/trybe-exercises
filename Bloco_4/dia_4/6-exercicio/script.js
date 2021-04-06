// Funções parte 2

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for:

// function EhPalindromo(string) {
//   let palindromo = '';

//   for (let index = string.length - 1; index >= 0; index -= 1) {
//     palindromo += string[index];
//   }
//   if (string === palindromo) {
//     return 'true';
//   } else {
//   return 'false';
// }
// }
// console.log(EhPalindromo('kaiak'));

// Resultado: true



// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor:

// function integers(array) {
// let highIndex = 0;
// for (let index in array){
//   if (array[highIndex] < array[index]) {
//     highIndex = index;
//   }
// }
// return highIndex;
// }
// console.log(integers([2, 3, 6, 7, 10, 1]));

// Resultado: 4 
// Indice [4] = 10



// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function integers(array) {
//   let lowIndex = 0;
//   for (let index in array) {
//     if (array[lowIndex] > array[index]) {
//       lowIndex = index;
//     }
//   }
//   return lowIndex
// }
// console.log(integers([2, 4, 6, 7, 10, 0, -3]));

// Resultado: 6
// Indice [6] = -3



// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function names(arr) {
let higherName = '';

for (let index = 0; index < arr.length; index += 1) {
  if (arr[index].length > higherName.length) {
    higherName = arr[index];
  }
}
return higherName;
}
console.log(names(['José', 'Luca', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Resultado: Fernanda



// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete:

function inteiros(array) {
let result = [];
let sorted = array.slice().sort();

for (let index = 0; index < sorted.length - 1; index += 1) {
  if (sorted[index + 1] === sorted[index]){
    result.push(sorted[index]);
  }
}
return result;
}
console.log(inteiros([2, 3, 2, 5, 8, 2, 3]));


// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sum(string) {
let soma = 0;

for (index = 1; index <= string; index += 1) {
 soma = soma + index
}
return soma
}
console.log(sum(10));


// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function comparison(word, ending) {
word = word.split('');
ending = ending.split('');
status = true;

for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
status =  false
  }
}
return status;
}
console.log(comparison('joaofernando', 'fernan'));
