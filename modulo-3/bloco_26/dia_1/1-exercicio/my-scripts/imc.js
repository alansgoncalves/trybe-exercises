const readFile = require('readline-sync');

function chamaCalculoIMC() {
  console.log('Vamos checar seu IMC?')
  const peso = readFile.questionInt('Informe seu peso (em kg): ')
  const altura = readFile.questionInt('Informe sua altura: ')
  const imc = peso / ((altura / 100) ** 2)

  console.log(`Seu IMC é de: ${imc.toFixed(2)}`)


if (imc < 18.5) {
  console.log('Situação: Abaixo do peso (magreza)');
  return;
}

if (imc < 25) {
  console.log('Situação: Peso normal');
  return;
}

if (imc < 30) {
  console.log('Situação: Acima do peso (sobrepeso)');
  return;
}

if (imc < 35) {
  console.log('Situação: Obesidade grau I');
  return;
}

if (imc < 40) {
  console.log('Situação: Obesidade grau II');
  return;
}

console.log('Situação: Obesidade graus III e IV');

}

chamaCalculoIMC()
