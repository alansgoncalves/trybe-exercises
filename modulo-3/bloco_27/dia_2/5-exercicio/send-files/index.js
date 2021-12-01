const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./meu-arquivo.txt');

const formInfo = new FormData();
formInfo.append('file', stream);

const formHeaders = formInfo.getHeaders()

const URL = "http://localhost:3000/files/upload";

axios.post(URL, formInfo, { headers: { ...formHeaders } })
  .then((response) => response)
  .catch((error) => error);
