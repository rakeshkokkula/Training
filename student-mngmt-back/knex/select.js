const mysql = require('mysql')

const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'mydb'
    }
}

const knex = require('knex')(options);

knex.from('demo').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['address']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });