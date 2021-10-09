const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const fs = require('fs');

app.get('/simpsons', (req, res) => {
  try {
    const fileContent = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'));
    return res.status(200).send(fileContent);
  } catch (error) {
    return res.status(500).json({ error: `${error}` });
  }
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
