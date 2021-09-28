const readFile = require('readline-sync');

function calculaVelocidade() {
  console.log('Vamos calcular a velocidade média?')
  const distancia = readFile.questionInt('Informe a distância a percorrer (mts): ')
  const tempo = readFile.questionInt('Informe o tempo a ser gasto (s): ')
  const velocidadeMedia = (distancia / tempo).toFixed(2)

  console.log("")
  console.log(`Velocidade média é de: ${velocidadeMedia} m/s`);
}

calculaVelocidade();