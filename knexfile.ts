import path  from 'path'
import dotenv from 'dotenv'

dotenv.config()
module.exports = {
  client: 'mysql',
  connection:{
    //filename:path.resolve(__dirname, 'src', 'database', 'database.mysql'),
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'userdb',
    password: process.env.DB_PASSWORD || 'userdb_server',
    database: process.env.DB_DATABASE || 'ecoleta'
  },
  migrations:{
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds:{
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }
}