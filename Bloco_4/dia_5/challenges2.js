// Desafio 10
function techList(array, name) {
  let result = [];
  let objects = {};
  let ordenado = array.sort();
  for (let index = 0; index < ordenado.length; index += 1) {
    objects = {
      tech: ordenado[index],
      name,
    };
    result.push(objects);
  }
  if (result.length === 0) {
    result = 'Vazio!';
  }
  return result;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Alan'));

// Desafio 11
function repeats(numbers, array) {
  let count = 0;
  for (let thirdIndex = 0; thirdIndex < array.length; thirdIndex += 1) {
    if (array[thirdIndex] === numbers) {
      count += 1;
    }
  }
  return count;
}

function arrayNumber(array) {
  let number = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || repeats(array[index], array) >= 3) {
      number = false;
    }
  }
  return number;
}

function formatNumber(array) {
  let str = array.join('');
  return `(${str.substring(0, 2)}) ${str.substring(2, 7)}-${str.substring(7)}`;
}

function generatePhoneNumber(array) {
  let numberPhone = formatNumber(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (arrayNumber(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return numberPhone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = true;
  if (lineA > Math.abs(lineB + lineC)) {
    triangle = false;
  } if (lineA < Math.abs(lineB - lineC)) {
    triangle = false;
  }
  return triangle;
}
console.log(triangleCheck(10, 14, 8));

/* https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/ */

// Desafio 13
function hydrate(string) {
  let water = 0;
  let numbers = string.match(/\d+/g).map(Number);

  for (const index of numbers) {
    water += index;
  }
  if (water > 1) {
    return `${water} copos de água`;
  }
  return `${water} copo de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
