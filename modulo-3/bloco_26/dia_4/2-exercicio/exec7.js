const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const fs = require('fs');

app.get('/simpsons', (req, res) => {
  const fileContent = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
  return res.status(200).send(fileContent);
})

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;

  try {
    const fileContent = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));

    if(fileContent.some((s) => s.id === id)) {
      return res.status(409).json({ message: 'Id already exists!' });
    }

    const updateFile = [...fileContent, { id, name }];

    fs.writeFileSync('./simpsons.json', JSON.stringify(updateFile));

    return res.status(204).end();

  } catch (error) {
    return res.status(500).json({ error: `${error}` });
  }
})

app.delete('/simpsons/:id', (req, res) => {
  const {id} = req.params;
  const fileContent = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
  const deleteSimpson = fileContent.findIndex((s) => s.id == id)

  if(deleteSimpson === -1) return res.status(404).json({ message: 'ID not found!'});

  fileContent.splice(deleteSimpson, 1)

  const updateFile = [...fileContent];

  fs.writeFileSync('./simpsons.json', JSON.stringify(updateFile));

  return res.status(204).end();
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));