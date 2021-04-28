// Parte I - Adicionando novas chaves (keys)

const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer1.lastName = 'Faria';

console.log(customer1);

// RESULTADO:

// { firstName: 'Roberto', age: 22, job: 'Teacher', lastName: 'Faria' }



const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// RESULTADO:

// {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
//   lastName: 'Ferreira',
//   fullName: 'Roberto Ferreira'
// }



const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

// RESULTADO:

// { firstName: 'Maria', age: 23, job: 'Medic' }
// { firstName: 'Maria', age: 23, job: 'Medic', lastName: 'Silva' }



const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// RESULTADO:

// {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
//   lastName: 'Ferreira',
//   fullName: 'Roberto Ferreira'
// }


// Parte II - Object.keys

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

// RESULTADO:

// Estudante 1
// Html, Nível: Muito Bom
// Css, Nível: Bom
// JavaScript, Nível: Ótimo
// SoftSkills, Nível: Ótimo

// Estudante 2
// Html, Nível: Bom
// Css, Nível: Ótimo
// JavaScript, Nível: Ruim
// SoftSkills, Nível: Ótimo
// Git, Nível: Bom


// Parte III - Object.values

