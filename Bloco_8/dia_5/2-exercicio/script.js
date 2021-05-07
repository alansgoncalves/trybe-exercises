// Rest

// Receber uma quantidade indefinida de parametros na função e retornar a soma de todos eles:
// Utilizando Rest com .reduce

const assert = require('assert');

const sumAll = (...numbers) => {

  const sum = numbers.reduce((acumulador, currentValue) => {
return acumulador + currentValue;
}, 0);

return sum;
}

// console.log(sumAll(1), 5);
// console.log(sumAll(1, 2), 6);
// console.log(sumAll(1, 2, 3), 15);

// RESULTADO:
// 1 5
// 3 6
// 6 15

assert.strictEqual(sumAll(1, '2'), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);


// EXEMPLO 2:

const assert = require('assert');

const formatDate = (year, month, day, ...rest) => {
  console.log(`${day}/${month}/${year}`);
  console.log(rest)
  return `${day}/${month}/${year}`
}
formatDate('1985', '7', '6', '32', '99')

// RESULTADO:
// 6/7/1985
// [ '32', '99' ]

assert.strictEqual(
  formatDate('1991'), 'undefined/undefined/1991',
);
assert.strictEqual(
  formatDate('1981', '7', '31', '22', '47', '12'), '31/7/1981',
);
assert.strictEqual(
  formatDate(...['1981', '7', '31', '22', '47', '12']), '31/7/1981',
);
