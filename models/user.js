import { DataTypes } from 'sequelize';
import { sequelize } from '../infra/index.js';

export const User = sequelize.define(
	'User',
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 10000 },
	},
	{ timestamps: false }
);
