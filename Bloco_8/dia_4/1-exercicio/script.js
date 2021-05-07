// Array.reduce

// EXEMPLO 1:

// A função soma todos os valores de um array. Apenas com o for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); 

// RESULTADO:
// 113




// EXEMPLO 2:

// Com .reduce :

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); 

//RESULTADO:
// 113



// EXEMPLO 3:

//  .reduce utilizando Rest:

const sumAll = (...numbers) => {
  const sum = numbers.reduce((acumulador, currentValue) => {
return acumulador + currentValue;
})
return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

// RESULTADO:
// 1
// 3
// 6







// EXEMPLO 4:

const assert = require('assert');

// Somando os números do array com for

const numbers = [2, 3, 4, 6, 8, 12, 24];

let accumulatorFor = numbers[0]; // = 2
console.log(`accumulatorFor: ${accumulatorFor}`);

for (let index = 1; index < numbers.length; index += 1) {
  console.log(`indice: ${index}, value: ${numbers[index]}`)
  console.log(`accumulatorFor before: ${accumulatorFor}`);

  accumulatorFor = accumulatorFor + numbers[index];
  console.log(`accumulatorFor after: ${accumulatorFor}`);
}

console.log(`Resultado da soma com for: ${accumulatorFor}`);

// RESULTADO:
// accumulatorFor: 2
// indice: 1, value: 3
// accumulatorFor before: 2
// accumulatorFor after: 5
// indice: 2, value: 4
// accumulatorFor before: 5
// accumulatorFor after: 9
// indice: 3, value: 6
// accumulatorFor before: 9
// accumulatorFor after: 15
// indice: 4, value: 8
// accumulatorFor before: 15
// accumulatorFor after: 23
// indice: 5, value: 12
// accumulatorFor before: 23
// accumulatorFor after: 35
// indice: 6, value: 24
// accumulatorFor before: 35
// accumulatorFor after: 59
// Resultado da soma com for: 59


const expectedValue = 59;
assert.strictEqual(accumulatorFor, expectedValue);




// EXEMPLO 5:

const assert = require('assert');

// Somando os números do array com reduce

const numbers = [2, 3, 4, 6, 8, 12, 24];

const accumulatorReduce = numbers.reduce((accumulator, number) => {
  console.log(`Accumulator = ${accumulator}, Number = ${number}`);
  return accumulator + number;
  // Tem que retornar algo - undefined por padrão
});


console.log(`Resultado da soma com reduce: ${accumulatorReduce}`);

// Teste
const expectedValue = 59;
assert.strictEqual(accumulatorReduce, expectedValue);




// EXEMPLO 6:

const assert = require('assert');

const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

// Concatenando os itens do array

const epicPhrase = epic.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
 });
console.log(epicPhrase);

//Teste

const expectedValue = 'A long time ago, in a galaxy far far away...';
assert.strictEqual(epicPhrase, expectedValue);




// EXEMPLO 7:

const assert = require('assert');

const players = [
  { fullName: 'Cristiane Rozeira de Souza Silva', email: 'criscris@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
  { fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br' },
];

// Gerando um objeto com email como chave e name como valor

const newPlayers = players.reduce((playerAccumulator, player) => {
  playerAccumulator[player.email] = player.fullName;
  return playerAccumulator;
}, {});

console.table(newPlayers);

// RESULTADO:
// ┌──────────────────────────┬────────────────────────────────────┐
// │         (index)          │               Values               │
// ├──────────────────────────┼────────────────────────────────────┤
// │   criscris@futebol.br    │ 'Cristiane Rozeira de Souza Silva' │
// │  rainhamarta@futebol.br  │      'Marta Vieira da Silva'       │
// │     bruxo@futebol.br     │     'Ronaldo de Assis Moreira'     │
// │ cortedocascao@futebol.br │   'Ronaldo Luís Nazário de Lima'   │
// └──────────────────────────┴────────────────────────────────────┘

//Teste

const expectedValues = {
  'criscris@futebol.br': 'Cristiane Rozeira de Souza Silva',
  'rainhamarta@futebol.br': 'Marta Vieira da Silva',
  'bruxo@futebol.br': 'Ronaldo de Assis Moreira',
  'cortedocascao@futebol.br': 'Ronaldo Luís Nazário de Lima',
};
assert.deepStrictEqual(newPlayers, expectedValues);
