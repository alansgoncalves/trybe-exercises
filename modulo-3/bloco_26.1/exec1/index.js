const express = require('express');
const app = express();
app.use(express.json());

const usersRouter = require('./routes/usersRouter');

app.use('/user', usersRouter);

app.listen(3000, () => console.log(`App listening on port 3000!`));
