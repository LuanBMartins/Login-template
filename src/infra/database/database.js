const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('BEFIT', 'root', 'admin', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then( () => console.log('Connection has been established successfully.'))
    
module.exports = sequelize