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

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));



// Parte IV - Object.entries

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);



for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

// RESULTADO:

// [
//   [ 'França', 'Paris' ],
//   [ 'Brasil', 'Brasília' ],
//   [ 'Espanha', 'Madrid' ],
//   [ 'Portugal', 'Lisboa' ]
// ]
// --------
// País: França
// Capital: Paris
// --------
// País: Brasil
// Capital: Brasília
// --------
// País: Espanha
// Capital: Madrid
// --------
// País: Portugal
// Capital: Lisboa




// Parte V - Object.assign

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);


// Exemplo:
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* REUSLTADO:
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */


  // Exemplo 2

  const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName);
  
  console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
  console.log(person); // { name: 'Roberto', lastName: 'Silva' }


  // Exemplo 3

  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }