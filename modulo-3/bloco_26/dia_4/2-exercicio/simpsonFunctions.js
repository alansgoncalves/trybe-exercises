const fs = require('fs');

function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent))
}

function writeSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { readSimpsons, writeSimpsons };
