require('dotenv').load();

module.exports = {
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING, 
  migrations: {
    directory: __dirname + '/server/migrations'
  },
  seeds: {
    directory: __dirname + '/server/seeds'
  }
};
