
const fs = require('fs');

const numNatural = (number) => {
  if (typeof number !== 'number') throw new Error('O valor deve ser um número!');

  if (number > 0) return 'positivo';

  if (number < 0) return 'negativo';

  return 'neutro';
};

const writeContent = ((file, content) => {
  if(typeof file !== 'string' || typeof content !== 'string') {
    throw new Error('Os valores devem ser tipo string!')
  }
  fs.writeFileSync(`./${file}`, content);

  return 'ok!'
})

module.exports = { numNatural, writeContent };
