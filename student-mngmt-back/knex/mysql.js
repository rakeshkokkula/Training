const mysql = require('mysql')
var knex = require('knex')
module.exports = {

development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'mydb'
    },
    migrations: {
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + './knex/seeds'
    },
    useNullAsDefault: true
  }
}

  // knex.select().from('books').timeout(1000)



