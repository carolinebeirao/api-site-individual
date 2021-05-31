	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Topico = sequelize.define('topico',{
		idTopico: {
			field: 'idTopico',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nomeTopico: {
			field: 'nomeTopico',
			type: DataTypes.STRING,
			allowNull: false
		},
		descricaoTopico: {
			field: 'descricaoTopico',
			type: DataTypes.STRING,
			allowNull: false
		},
		dia: {
			field: 'dia',
			type: DataTypes.STRING,
			allowNull: false
		}, 
	
		tableName: 'topico', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Topico;
};
