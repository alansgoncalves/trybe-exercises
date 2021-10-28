const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cepsController = require('./controllers/cepsController');

const errorMiddleware = require('./middlewares/error')

app.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong!" })
})

app.get('/cep/:cep', cepsController.findAddressByCep);
app.post('/cep', cepsController.create);

app.use(errorMiddleware);

app.listen(3000, () => console.log(`Listening on port 3000!`))
