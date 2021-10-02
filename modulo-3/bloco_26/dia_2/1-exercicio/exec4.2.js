const fs = require('fs').promises;

async function characterById(id) {
  const characters = await fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const getSimpson = characters.find((simpson) => simpson.id == id);

  if(!getSimpson) {
    throw new Error('id não encontrado');
  }

  return getSimpson;
}

characterById(10).then(console.log).catch(console.error);
