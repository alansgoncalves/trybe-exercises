// Array.filter

const listaDePessoasAprovadas = [
  { nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51 },
  { nome: 'Thomas Edson', email: 'thomas@example.com', nota: 101 },
  { nome: 'Jamiroquai', email: 'jamiroquai@example.com', nota: 151 },
  { nome: 'John Travolta', email: 'john@example.com', nota: 150 },
  { nome: 'Henri Iglesias', email: 'henri@example.com', nota: 0 },
  { nome: 'Dani Trejo', email: 'dani@example.com', nota: 123 },
  { nome: 'Chapolin', email: 'chapolin@example.com', nota: 49 },
  { nome: 'Fernando Color', email: 'fernando@example.com', nota: 100 },
];

// Vamos filtrar somente as pessoas aprovadas utilizando a função filter():

// 1. primeiro declaramos uma constante e atribuimos a ela o resultado da função filter
// 2. A função filter espera que vc passe uma outra função para ela. Definimos o nome (people)
const pessoasFiltradas = listaDePessoasAprovadas.filter((people) => people.nota >= 100);
console.log(pessoasFiltradas);

// RESULTADO:
// [
//   { nome: 'Thomas Edson', email: 'thomas@example.com', nota: 101 },
//   { nome: 'Jamiroquai', email: 'jamiroquai@example.com', nota: 151 },
//   { nome: 'John Travolta', email: 'john@example.com', nota: 150 },
//   { nome: 'Dani Trejo', email: 'dani@example.com', nota: 123 },
//   { nome: 'Fernando Color', email: 'fernando@example.com', nota: 100 }
// ]


// Agora crie uma função para disparar um email para todas as pessoas aprovadas:

const sendEmail = (pessoaAprovada) => {
  const parte1 = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`
  console.log(mensagem)
}

pessoasFiltradas.forEach((people) => sendEmail(people));

// RESULTADO:
// thomas@example.com: Parabéns Thomas Edson sua nota foi 101
// jamiroquai@example.com: Parabéns Jamiroquai sua nota foi 151
// john@example.com: Parabéns John Travolta sua nota foi 150
// dani@example.com: Parabéns Dani Trejo sua nota foi 123
// fernando@example.com: Parabéns Fernando Color sua nota foi 100



// Exercicio 2

// No exemplo abaixo, apenas substituiremos o find por filter:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); 

// RESULTADO:
// [ 30, 22 ]


// Outra forma de ser realizada sem a necessidade de criar uma nova função.

const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); 

// RESULTADO:
// [ 30, 22 ]




//Exercicio 3

// Deseja-se apenas as pessoas que não possuem ainda idade para dirigir:

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));

// RESULTADO:
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]




// Exercicio 4

// É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante:

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => 
  listStudents.filter((student) => student !== name);

// Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
  const newListStudents = removeStudentByName('Manuela', arrayMyStudents);

  console.log(newListStudents); 

// RESULTADO:
// [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// OBS: Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado.