const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


app.post('/hello', function(req, res) {
  const { name } = req.body
  res.status(200).json({"message": `Hello, ${name}!`})
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
