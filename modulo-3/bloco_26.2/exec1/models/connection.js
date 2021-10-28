const mySql = require('mysql2/promise');

const connection = mySql.createPool({
  user: 'root',
  password: 'Messi2014',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;
