var config = require('./server/config');

module.exports = {
  client: 'pg',
  connection: config.connection, 
  migrations: {
    directory: __dirname + '/server/migrations'
  },
  seeds: {
    directory: __dirname + '/server/seeds'
  }
};
