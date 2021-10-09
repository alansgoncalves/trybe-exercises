const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/greetings', function(req, res) {
  const { name, age } = req.body

  if( age <= 17) {
    return res.status(401).json({ "message": "Unauthorized" })
  }

  res.status(200).json({ "message": `Hello ${name}!` })
})

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));