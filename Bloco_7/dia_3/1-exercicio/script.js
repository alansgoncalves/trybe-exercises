// // Acompanhe um exemplo do uso do módulo assert abaixo. Rode as expressões separadamente, comentando a linha que não será executada para ver o resultado.

// const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70



// // Neste outro exemplo utilizamos o assert para testar o retorno esperado da função division :

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(10, 2);

// assert.strictEqual(expected, 5, 'Nove dividido por três é igual a três');



// // Podemos combinar vários métodos do assert quando escrevemos nossos testes. Isso pode ser muito útil para ampliar a cobertura do teste em casos de falhas! Observe:

// const assert = require('assert');

// function add(a, b) {
//   return a + b;
// }

// const expected = add(1, 2);

// assert.ok(expected === 32, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro

// assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)

// assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)



// // É possível também testar estruturas como arrays e objetos:

// const assert = require('assert');

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 5];

// assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');



// const person1 = { name: 'john', age: 21 };
// const person2 = { name: 'john', age: 21 };

// assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');



// const person3 = { name: 'john', age: 19 };

// assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');



// Testes unitários e a melhoria no código

function division(x, y) {
  return x / y;
}

const assert = require('assert');

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣 ERRO no segundo strictEqual, não é possível realizar divisão por 0

// Podemos fazer isso usando a palavra chave throw , que no javascript serve para lançar um erro. Usaremos ele, então, para lançar um erro caso o divisor y seja igual a zero:

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK




// Sobre o throw

// Ao executar os códigos escritos por você, não há dúvidas de que você já se deparou com mensagens de erro quando algo não estava fazendo o que deveria. Seja um erro de sintaxe ou uma variável indefinida em algum lugar, lidar com erros é uma tarefa comum na vida de qualquer pessoa desenvolvedora.

const assert = require('assert');
function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}
assert.strictEqual(division(10, 3), 5);
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/);