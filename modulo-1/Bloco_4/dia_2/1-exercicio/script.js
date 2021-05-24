// Acessar os arrays pelo seu índice:

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let lists1 = tasksList[1];
console.log(lists1);
// Reunião

let lists2 = tasksList[tasksList.length - 1];
console.log(lists2);
// Brincar com o cachorro


// Adicionar uma nova atividade no final da lista de arrays:
tasksList.push('Fazer exercicio')
console.log(tasksList);


// Adicionar uma nova atividade no inicio da lista de arrays:
tasksList.unshift('Acordar cedo')
console.log(tasksList)

// Remover a última atividade da lista de um array:
tasksList.pop()
console.log(tasksList)

// Remover a primeira atividade da lista de um array
tasksList.shift()
console.log(tasksList)