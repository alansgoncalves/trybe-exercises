// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

// Vamos criar o algoritmo, e pra isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

// 1. Adicionar o array;
let fruits = [3, 4, 10, 1, 12];

// 2. Criar uma variável com valor 0;
let sum = 0;

// 3. Criar um loop que percorre o array;
for(let index = 0; index < fruits.length; index += 1) {
  
// 4. Incrementar a variável com o valor correspondente a cada loop;
  sum += fruits[index];
  }

// 5. Criar um if com a condição da variável ser maior que 15;
  if (sum > 15) {

// 6. Caso a variável obedeça a condição;
// 7. Imprimir a variável
    console.log(sum);

// 8. Caso não obedeça a condição;
  } else {

// 9. Imprimir a mensagem "valor menor que 16";
    console.log("valor menor que 16");
  }
