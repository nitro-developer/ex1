export const up = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().createTable('Users', {
		id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
		balance: { type: 'INTEGER', allowNull: false, defaultValue: 10000 },
	});

	await sequelize.getQueryInterface().bulkInsert('Users', [{ balance: 10000 }]);
};

export const down = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().dropTable('Users');
};
