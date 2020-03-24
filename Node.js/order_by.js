const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/demo';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function getRows() {

    let notes = await Note.findAll({
        order: [['description', 'DESC']],
        attributes: ['id', 'description'], raw: true
    })

    console.log(notes);

    sequelize.close();
}

getRows();