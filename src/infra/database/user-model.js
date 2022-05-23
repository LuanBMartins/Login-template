const { DataTypes } = require('sequelize')
const connection = require('./database')

const user = connection.define('usuario', {
    email: {
        primaryKey: true,
		type: DataTypes.CHAR(100),
		allowNull: false,
		unique: true,
	},
    password: {
		type: DataTypes.CHAR(30),
		allowNull: false,
	},
}, {
    tableName: 'usuario',
	timestamps: false,
	hooks: {
		afterCreate: (record) => {
			delete record.dataValues.password
		},
	},
})

module.exports = user