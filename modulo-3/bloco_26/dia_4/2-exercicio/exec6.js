const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const fs = require('fs');

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params
  try {
    const fileContent = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));

    const getSimpson = fileContent.find((s) => s.id === id)

    if(!getSimpson) return res.status(404).json({ message: 'simpson not found' });
    
    return res.status(202).json(getSimpson);

  } catch (error) {
    return res.status(500).json({ message: `${error}` });
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));