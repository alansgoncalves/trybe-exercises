// Callbacks

//// Callback é uma função que você passa como parâmetro para uma outra função.

// Exemplo 1


//Neste primeiro trecho de código temos duas declarações de variáveis. A primeira delas myExpenses , é um array de objetos que representa os gastos de uma pessoa no mês. A segunda, myIncome , representa o quanto esta pessoa recebeu neste mesmo mês.
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

// Neste trecho da implementação podemos notar que foi adicionada uma função monthlyBudget que recebe três parâmetros, myIncome , myExpenses , e callback: 
const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

//Neste exemplo o parâmetro callback receberá uma função que retornará o quanto gastamos no mês, ou seja, nossa função callback irá realizar a lógica necessária para somar todos os gastos contidos no array de objetos myExpenses , e retornará este valor para a constante totalExpenses:
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// RESULTADO
// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00 

// Em síntese o que fizemos foi:

// 1. Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// 2. Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .
// 3. Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
// 4. Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.

//// Callback é uma função que você passa como parâmetro para cada uma delas é exemplo de função callback!!!!!!




// Exemplo 2

// No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada:

// const assert = require('assert');

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = () => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
// };

// assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
// assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser


// Completando a função:

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => { // coloquei um callback como paramentro
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn);  // foi inserido a função callback no return
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // chamei a constante userFullName
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // chamei a constante userNationality




// Exemplo 3

// No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// const getUser = () => {
//   setTimeout(() => {
//     const user = {
//       firstName: "Ivan",
//       lastName: "Ivanovich",
//       nationality: "Russian",
//     };
//     console.log(user);
//   }, delay());
// };

// getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
// getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// Completando a função:

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {   // // coloquei um callback como paramentro
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));  //foi inserido a função callback dentro de console.log
  }, delay());
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo


// Obs: note e averigue o comportamento assíncrono da função getUser ao chamar getUser(userFullName) seguido de getUser(userNationality) . Tem hora que é impresso antes no console o nome da pessoa, e tem hora que é impressa antes a nacionalidade da pessoa!