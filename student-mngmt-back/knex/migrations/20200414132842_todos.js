
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('todos', function(table) {
        table.increments();
        table.string('title');
        table.text('description');
        table.dateTime('start_date');
        table.dateTime('due_date');
        table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
