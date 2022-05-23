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
		type: DataTypes.TEXT,
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

user.sync()

module.exports = user