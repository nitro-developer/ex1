import express from 'express';

import './infra/index.js';
import { applyMigrations } from './migrations/index.js';

import balanceRouter from './routes/balance.js';

export const bootstrap = async () => {
	const app = express();
	const PORT = process.env.PORT || 3000;

	app.use(express.json());

	await applyMigrations();

	app.use('/balance', balanceRouter);

	app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
};
