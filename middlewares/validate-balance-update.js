export const validateBalanceUpdate = (req, res, next) => {
	const { userId, amount } = req.body;

	if (!userId || typeof userId !== 'number' || typeof amount !== 'number') {
		return res.status(400).json({ error: 'bad request' });
	}

	next();
};
