const numNatural = (number) => {
  if (typeof number !== 'number') throw new Error('Deve ser um número!');

  if (number > 0) return 'positivo';

  if (number < 0) return 'negativo';

  return 'neutro';
};

module.exports = { numNatural };
