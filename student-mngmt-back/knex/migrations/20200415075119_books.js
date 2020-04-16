
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('authors', function(table) {
        table.increments();
        table.string('name');
        table.text('age');
        table.dateTime('start_date');
        table.dateTime('due_date');
        table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('authors')
};
