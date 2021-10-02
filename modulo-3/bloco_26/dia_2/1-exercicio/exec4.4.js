const fs = require('fs').promises;

async function filterCharacter() {
  const characters = await fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => JSON.parse(fileContent));

  const newArray = characters.filter((_, index) => index + 1 <= 4);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));

}

filterCharacter();