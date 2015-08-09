import Bookshelf from 'bookshelf';
import knex from 'knex';
import config from './config';

let dbConfig = knex({
  client: 'pg',
  connection: config.connection
});

let dbConnection = Bookshelf(dbConfig);

export default dbConnection;
