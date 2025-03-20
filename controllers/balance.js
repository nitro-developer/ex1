import { updateBalance } from '../services/balance.js';

export const updateBalanceV1 = async (req, res) => {
	const { userId, amount } = req.body;

	try {
		const result = await updateBalance(userId, amount);
		res.status(200).json({ success: true, data: { ...result } });
	} catch (error) {
		res.status(error.status).json({ success: false, error: error.message });
	}
};
