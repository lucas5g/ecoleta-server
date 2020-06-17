
import knex from 'knex'
import path from 'path'

/*
const connection = knex({
  client: 'sqlite3',
  connection:{
    filename: path.resolve(__dirname, 'database.sqlite')
  }
})
**/

//dont'wokdk

const connection = knex({
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
    user: 'server',
    password: 'server_user',
    database: 'ecoleta'
  }
});

/*
const connection = knex({
  client: 'mysql',
  connection: {
    filename:path.resolve(__dirname, 'database.mysql')
  }
});
*/

export default connection