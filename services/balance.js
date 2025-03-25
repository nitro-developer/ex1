import { Op, Sequelize } from 'sequelize';
import { User } from '../models/index.js';
import { HttpException } from '../shared/http-exception.js';

export const updateBalance = async (userId, amount) => {
	try {
		const whereCondition = {
			id: userId,
		};

		if (amount < 0) whereCondition.balance = { [Op.gte]: -amount };

		const [affectedRows, updatedUsers] = await User.update(
			{ balance: Sequelize.literal(`balance + ${amount}`) },
			{
				where: whereCondition,
				returning: true,
			}
		);

		if (!affectedRows) {
			throw new HttpException('insufficient balance or user not found', 400);
		}

		return { userId: updatedUsers[0].id, balance: updatedUsers[0].balance };
	} catch (error) {
		throw new HttpException(error?.message || 'Internal Server Error', error?.status || 500);
	}
};
