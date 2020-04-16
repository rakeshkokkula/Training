exports.up = function(knex, Promise) {
  return knex.schema.table('Heroes', function(table) {
    table.integer('enemyId').references('id').inTable('Heroes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Heroes', function(table) {
    table.dropColumn('heroName');
  });
};

exports.seed = function(knex, Promise) {
  return knex('Heroes').del()
    .then(function () {
      return knex('Heroes').insert([
        {id: 1, firstName: 'Clark', lastName: 'Kent', heroName: 'Superman', enemyId: 2},
        {id: 2, firstName: 'Bruce', lastName: 'Wayne', heroName: 'Batman', enemyId: 1},
        {id: 3, firstName: 'Peter', lastName: 'Parker', heroName: 'Spiderman'},
        {id: 4, firstName: 'Susan', lastName: 'Storm-Richards', heroName: 'Invisible Woman'},
      ]);
    });
};

import schema from './schema';
import resolvers from './resolvers';
import {
  MongoConnector,
  MySQLConnector,
} from './connectors';
app.use('/graphql', req => {
  const mongo = new MongoConnector(mongoConnection);
  const mysql = new MySQLConnector(mysqlConnection);
  return {
    schema,
    resolvers,
    context: {
      conn: {
        mongo,
        mysql,
      },
    },
  };
});

