const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { generateToken } = require('./middlewares/validations')
const externalAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(bodyParser.json());

const userRoute = require('./routes/userRoute')

app.use('/user', userRoute);

app.get('/btc', generateToken, async(_req, res) => {
  const result = await axios.get(externalAPI)
  res.status(200).json(result.data);
});

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`))