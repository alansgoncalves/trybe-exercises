// CÓDIGO IMPERATIVO OU DECLARATIVO

// 1. Preciso da matrícula, nome, email de todos os alunos com média >= 9

// IMPERATIVO onde eu descrevo exatamento como o código deve fazer os passos para 
//calcular a média

// const notas = [8.7, 6.8, 7.7, 9.2, 5.3, 8.0, 7.6, 9.9, 9.1, 8.8, 10.0, 9.7]

// function media(notas) {
//   let total = 0;
//   for(index = 0; index < notas.length; index += 1) {
//     total += notas[index]
//   }
//   return total / notas.length
// }
// const mediaTurma = media(notas);
// console.log(mediaTurma);

// RESULTADO
// 8.4



// DECLARATIVO 

const notas = [8.7, 6.8, 7.7, 9.2, 5.3, 8.0, 7.6, 9.9, 9.1, 8.8, 10.0, 9.7]

const sum = (a, b) => a + b
const division = (a, b) => a / b

const mediaTurma = division(
  notas.reduce(sum),
  notas.length
)
console.log(mediaTurma)

// RESULTADO
// 8.4


// PARADIGMA FUNCIONAL

//DECLARAÇÃO SIMPLES

function dobro(x) {
  return x * 2
}
console.log(dobro(10));

// RESULTADO
// 820


// FUNÇÕES ANÔNIMA: função sem nome para uma variável

const dobro = function(x) {
  return x * 2
}
console.log(dobro(10));



//Exemplo Versão Procedural:

const alunos = [
  { nome: 'Alan', nota: 9.5 },
  { nome: 'Bia', nota: 7.5 },
  { nome: 'Gil', nota: 6.5 },
  { nome: 'Rui', nota: 8.5 },
  { nome: 'Ana', nota: 9.2 },
  { nome: 'Bel', nota: 4.5 },
  { nome: 'Davi', nota: 3.5 },
  { nome: 'Lia', nota: 9.9 },
]

const aprovados = []

for(let index = 0; index < alunos.length; index += 1) {
  if(alunos[index].nota >= 7) {
    aprovados.push(alunos[index]);
  }
}
console.log(aprovados);



//Exemplo Versão Funcional:

const alunos = [
  { nome: 'Alan', nota: 9.5 },
  { nome: 'Bia', nota: 7.5 },
  { nome: 'Gil', nota: 6.5 },
  { nome: 'Rui', nota: 8.5 },
  { nome: 'Ana', nota: 9.2 },
  { nome: 'Bel', nota: 4.5 },
  { nome: 'Davi', nota: 3.5 },
  { nome: 'Lia', nota: 9.9 },
]

const estaAprovado = aluno => aluno.nota >= 7;

const aprovados = alunos.filter(estaAprovado) //Aqui estou filtarando os alunos aprovados que serão armazenaods no novo array
console.log(aprovados)