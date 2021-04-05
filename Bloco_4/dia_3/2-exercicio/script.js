// Exercício 1
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

  // *****
  // *****
  // *****
  // *****
  // *****


//  let n = 5
//  let line;

//  for (let index = 0; index < n; index += 1) {
//   line = '';    //vai gerar n linhas
//   for (let secondIndex = 0; secondIndex < n; secondIndex += 1 ) {
//     line = line + '*';    //vai incluir * n vezes em cada linha
//   }
//   console.log(line)
//   }






// Exercício 2
// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// *
// **
// ***
// ****
// *****


// let n = 5
// let line;

// for (var index = 1; index <= n; index += 1) {
//   line = '';
//   for (secondIndex = 1; secondIndex <= index; secondIndex +=1 ) {
//     line += '*';
//   }
//   console.log(line);
// }






// Exercicio 3
// Agora inverta o lado do triângulo. Por exemplo:

//     *
//    **
//   ***
//  ****
// *****


// let n = 5;
// let ast = '*';
// let line = ' ';

// for(let index = 1; index <= n; index += 1 ){
//   console.log(line.repeat(n-index) + ast.repeat(index));  
// }

// line.repeat(n-index) vai aplicar a quantidade de espaços de acordo com o valor de 'n' - 'index' atual. Agora o ast.repeat(index) vai aplicar a quantidade de asteriscos de acordo com o valor do 'index' atual.






// Exercício 4
// Depois, faça uma pirâmide com n asteriscos de base:

//   *
//  ***
// *****


// let n = 3;
// let ast = '*';
// let line = ' ';

// for (let index = 1; index <= n; index += 1) {
//   console.log(line.repeat(n-index) + ast.repeat(2*index - 1));
// }

// line.repeat(n-index) vai aplicar a quantidade de espaços de acordo com o valor de 'n' - 'index' atual. Agora o ast.repeat(2*index-1) vai aplicar 2 * index atual - 1 para inserir a quantidade de asteriscos.






// Exercícios Bonus

// Exercício 1
// Faça um triangulo retângulo de ponta cabeça com n asteriscos. Exemplo:

// *****
// ****
// ***
// **
// *

// let n = 5
// let line;

// for (var index = 0; index < n; index += 1) {
//   line = '';
//   for (secondIndex = index; secondIndex < n; secondIndex +=1 ) {
//     line += '*';
//   }
//   console.log(line);
// }





// Exercicio 2
// Faça o mesmo triangulo só que invertido. Exemplo:

// *****
//  ****
//   ***
//    **
//     *

// let n = 5;
// let ast = '*';
// let line = ' ';

// for (let index = 0; index < n; index += 1) {
//   console.log(line.repeat(index) + ast.repeat(n - index));
// }





// Exercício 3
// Depois, faça uma pirâmide invertida com n asteriscos de base de ponta cabeça:

// *****
//  ***
//   *

// let n = 5;
// let ast = '*';
// let line = ' ';

// for (let index = 2; index < n; index += 1) {
//   console.log(line.repeat(index) + ast.repeat(2 * (n - index) - 1));  // ast.repeat(2 * (n - index) - 1) primeiro vai realizar a subtração dentro dos parentesese (n - index), em seguida a multiplicação 2 *, e por último a subtração - 1.
// }




// Exercicio 5
//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

// n = 7

//    *
//   * *
//  *   *
// *******


// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }




// Exercicio 6
// Faça um programa que diz se um número definido numa variável é primo ou não.


// let num = 6;
// let contador = 0;

// for (let index = 1; index <= num; index += 1) {
//   if (num % index === 0) {    //se o resta da divisão de n e index for igual a zero
//     contador += 1;
//   }
// }
//   if (contador === 2) {    //para conseguir dividir o valor n apenas 2 vezes, caso sim, ele é um numero primo
//     console.log('O número ' + num + ' é primo')
//   } else {
//     console.log('O número ' + num + ' não é primo')      // se caso o contador for diferente de 2, não será número primo
//   }
