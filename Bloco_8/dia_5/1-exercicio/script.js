// spread operator: 
// - Ajuda a promover imutabilidade no código;
// - Espalha os valores de arrayy e ojetos;

// EXEMPLO 1:

const carros = ['gol', 'hb20', 'focus'];
const motos = ['biz', 'r1'];

// const veiculos = [...carros, ...motos]

// RESULTADO:
//[ 'gol', 'hb20', 'focus', 'biz', 'r1' ]

const veiculos = ['f40', ...carros, ...motos]

// RESULTADO:
// [ 'f40', 'gol', 'hb20', 'focus', 'biz', 'r1' ]

const concatArrays = carros.concat(motos);

// RESULTADO:
//[ 'gol', 'hb20', 'focus', 'biz', 'r1' ]




// EXEMPLO 2:

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: 'Alan',
  idade: 28,
  cidade: 'BH',
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
}

console.log(pessoaTryber)

// RESULTADO:
// {
//   nome: 'Alan',
//   idade: 28,
//   cidade: 'BH',
//   softSkills: true,
//   hardSkills: true,
//   trabalho: true
// }





// EXEMPLO 3:

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray);
// RESULTADO:
// [ 1, 2, 3, 4, 5, 6 ];

console.log(numbers);
// RESULTADO:
// [ 1, 2, 3 ];





// EXEMPLO 4:

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); 

// RESULTADO
/* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */




// EXEMPLO 5:

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); 

// RESULTADO:
// 20.76




// EXEMPLO 6

// spread operator com as funções Math.max e Math.min:

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); 

// RESULTADO:
// 800

console.log(Math.min(...randomNumbers)); 

// RESULTADO:
// 5




// EXEMPLO 7

// Também podeMOS fazer o mesmo com objetos:

const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); 

// RESULTADO:
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */




// EXEMPLO 8:

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'laranja', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['abacaxi', 'melancia', 'maracuja'];

const fruitSalad = (fruit, additional) => {
  fruit = specialFruit;
  additional = additionalItens;
return [...specialFruit, ...additionalItens]
};

console.log(fruitSalad(specialFruit, additionalItens));

// RESULTAO:
// [ 'banana', 'laranja', 'maça', 'abacaxi', 'melancia', 'maracuja' ]




// EXEMPLO (AULA) 9:

const names = ['Carol', 'Bernardo', 'Joicy', 'Oliva', 'Pablo', 'Panta'];
console.log(names[0], names[1], names[2], names[3], names[4], names[5]);
console.log(...names)





// EXEMPLO (AULA) 10:

const assert = require('assert');

// No aplicativo Uber, por exemplo, conseguimos ver a localização
// A gente consegue ver a localização da pessoa motorista no mapa
// Vamos supor que o app receba as coordenadas neste seguinte formato

const point = [1.0, 2.2];
const otherPoint = [0.1, 3.5, -99.6, 77.8, 34];

const printPointCoordinates = (x, y, z) =>
  `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;
console.log(printPointCoordinates(1, 2.2, -6.6))

// RESULTADO:
// Point coordinates are x = 1, y = 2.2 and z = -6.6

assert.strictEqual(
  printPointCoordinates(...point, -6.6),
  'Point coordinates are x = 1, y = 2.2 and z = -6.6',
);
assert.strictEqual(
  printPointCoordinates(...otherPoint),
  'Point coordinates are x = 0.1, y = 3.5 and z = -99.6',
);
