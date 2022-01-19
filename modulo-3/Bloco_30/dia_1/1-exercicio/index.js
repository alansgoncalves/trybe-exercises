const express = require('express');
const app = express();
const {listJokes} = require('./controllers/jokeController')

app.set("view engine", "ejs");

app.set("views", "./views");

app.get("/", listJokes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
