import { Sequelize } from 'sequelize';

const url = process.env.POSTGRES_URL;

if (!url) {
	throw new Error('POSTGRES_URL is not defined');
}

export const sequelize = new Sequelize(url, {
	logging: false,
});
