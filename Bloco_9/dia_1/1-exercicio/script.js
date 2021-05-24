// Operações assíncronas

// Exemplo 1

setTimeout(() => {  // setTimeout é uma função assíncrona, que espera alguns milissegundos para executar a função
  console.log('Comprar parafusos')
  console.log('Adicionar ao estoque')
}, 2000);   // 2000 = (2 segundos) referente ao tempo de carregamento 

console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro'); 

// RESULTADO
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1 , 2 e 3 , mesmo assim o retorno das chamadas só ocorre ao final.



// Exemplo 2

const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

//RESULTADO
//AssertionError [ERR_ASSERTION]

// O teste espera receber o array [1, 2, 3] , mas apenas recebe o [2, 3]



// Exemplo 3

const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

// RESULTADO
// [ 2 ]
// [ 2, 3 ]
// [ 2, 3, 1 ]

