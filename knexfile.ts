import path  from 'path'

module.exports = {
  client: 'mysql',
  connection:{
    //filename:path.resolve(__dirname, 'src', 'database', 'database.mysql'),
    host: '127.0.0.1',
    user: 'server',
    password: 'server_user',
    database: 'ecoleta'
  },
  migrations:{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds:{
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }
}