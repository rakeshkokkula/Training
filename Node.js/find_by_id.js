const Sequelize = require('sequelize');
const path = 'mysql://root@localhost:3306/demo';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

Note.findById(2).then((note) => {
    console.log(note.get({ plain: true }));
    console.log('********************')
    console.log(`id: ${note.id}, description: ${note.description}`);
}).finally(() => {
    sequelize.close();
});