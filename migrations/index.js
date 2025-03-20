import { Umzug, SequelizeStorage } from 'umzug';
import { sequelize } from '../infra/index.js';

export const applyMigrations = async () => {
	const umzug = new Umzug({
		migrations: { glob: './migrations/*-*.js' },
		context: sequelize,
		storage: new SequelizeStorage({ sequelize }),
		logger: console,
	});

	await umzug.up();
	console.log('[migrations] migrations applied');
};
