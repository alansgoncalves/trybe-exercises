const fs = require('fs').promises;

async function filterCharacter() {
  const characters = await fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const newArray = characters.filter((simpson) => simpson.id != "10" && simpson.id != "6");

  return newArray;
}

filterCharacter().then(console.log).catch(console.error);
