// Parte II

// Crie uma função que receba um número e retorne seu fatorial

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

function returnFactorial(number) {
  let result = number;
  for (let index = 1; index < number; index += 1) {
    result = result * index;
  }
  return result
}
console.log(returnFactorial(9));

//Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(9))



// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"; // retorna 'aconteceu'

let result = '';

longestWord.split(' ').forEach(word => {
  if (word.trim().length > result.length) {
    result = word.trim();
  }
});
console.log(result);

// site pesquisado:
//https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript#:~:text=log(big)%3B%20%2F%2FTamb%C3%A9m,split(%22%20%22).