import { User } from '../models/index.js';
import { sequelize } from '../infra/index.js';
import { HttpException } from '../shared/http-exception.js';

export const updateBalance = async (userId, amount) => {
	try {
		const [updatedUser] = await sequelize.query(
			`UPDATE "Users" 
			SET balance = balance + :amount 
			WHERE id = :userId AND balance + :amount >= 0 
			RETURNING balance`,
			{
				replacements: { userId, amount },
				type: 'UPDATE',
			}
		);

		if (!updatedUser || updatedUser.length === 0) {
			throw new HttpException('insufficient balance or user not found', 400);
		}

		return { balance: updatedUser[0]?.balance };
	} catch (error) {
		throw new HttpException(error?.message, error?.status);
	}
};
