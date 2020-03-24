const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/demo';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function countRows() {

    let n = await Note.count();
    console.log(`There are ${n} rows`);
    
    sequelize.close();
}

countRows();