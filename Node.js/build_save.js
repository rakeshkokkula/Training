const Sequelize = require('sequelize');

const path = 'mysql://root@localhost:3306/demo';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

const note = Note.build({ description: 'Took a cold bath' });
note.save().then(() => {
    console.log('new task saved');
}).finally(() => {
    sequelize.close();
});