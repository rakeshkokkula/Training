const knex = require('../knex/knexfile');

module.exports = {
  getAll() {
    return knex('users');
  },
  getOne(id) {
    return knex('users').where('id', id).first();
  },
  create(users) {
    return knex('users').insert(users, '*');
  },
  update(id, sticker) {
    return knex('users').where('id', id).update(users, '*');
  },
  delete(id) {
    return knex('users').where('id', id).del();
  }
}