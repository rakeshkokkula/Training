const mysql = require('mysql')
const knex = require('knex')
const Schema = knex.Schema

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorid: String
})

module.export = knex.model('Book', bookSchema)