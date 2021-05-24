// Mais exemplos de acesso aos valores das propridades dos objetos:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

// Resultado:

// Saab
// Volvo
// BMW


let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

// Resultado:

// type Fiat
// model 500
// color white


let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
}

// Resultado:

// 0
// 1
// 2


// Já o for of, vai percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in

let foods = ['hamburguer', 'bife', 'acarajé'];
for (let value of foods) {
  console.log(value);
}

// Resultado:

// hamburguer
// bife
// acarajé



// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

// Exercicio 1
// Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto:

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for (let hi in names) {
  console.log('Olá ' + names[hi] + '!')
}

//Resultado:

// Olá João!
// Olá Maria!
// Olá Jorge!



// Exercicio 2
// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' :

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (let car in carro) {
  console.log(car, carro[car]);
}

// Resultado:

// model A3 Sedan
// manufacturer Audi
// year 2020
