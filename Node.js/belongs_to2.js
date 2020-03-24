const Sequelize = require('sequelize');

const path = 'mysql://root@localhost:3306/demo';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Employee = sequelize.define('employees', {
    name: Sequelize.STRING
});

let Project = sequelize.define('projects', {
    name: Sequelize.STRING
});

Employee.belongsTo(Project);

Employee.findAll({include: [Project]}).then(employees => {

    employees.forEach(employee => {
        console.log(`${employee.name} is in project ${employee.project.name}`);
    });
}).finally(() => {
    sequelize.close();
});