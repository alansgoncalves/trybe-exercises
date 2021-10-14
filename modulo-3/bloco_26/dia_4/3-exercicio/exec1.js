const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const userRoute = require('./routes/userRoute')

app.use('/user', userRoute);

app.listen(3000, () => console.log(`App ouvindo a porta 3000!`))