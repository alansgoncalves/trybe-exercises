// Destructuring

const assert = require('assert');

// EXEMPLO 1:

const bbbParticipant = {
  name: 'Gilberto',
  birthplace: 'Jaboatão - Pernambuco',
  nickname: 'Gil do Vigor',
  jobs: [
    'Economista',
    'Ex BBB',
    'Missionario',
  ]
};

const { name, nickname, jobs } = bbbParticipant;

console.log(`${name} tambem conhecido como ${nickname}`);
// RESULTADO:
// Gilberto tambem conhecido como Gil do Vigor

const [ firstJob, secondJob, thirdJob ] = jobs

console.log(`Possui uma nobre carreira como ${jobs[0]}, ${jobs[1]} e ${jobs[2]}`);
// RESULTADO:
// Possui uma nobre carreira como Economista, Ex BBB e Missionario




// EXEMPLO 2:

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg',
  },
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't',
  },
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700,
  },
};

// Implementação da função
function animalDescription({ commonName, name, weightRange: { min, max, measurementUnit = 'kg' } }) {
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}


assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg',
);

assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t',
);

assert.strictEqual(
  animalDescription(polarBear),
  'Polar Bear (Ursus maritimus) weighs around 350-700 kg',
);