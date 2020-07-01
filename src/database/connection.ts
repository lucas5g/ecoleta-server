
import knex from 'knex'


const connection = knex({
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
    user: 'userdb',
    password: 'userdb_server',
    database: 'ecoleta'
  }
});


export default connection