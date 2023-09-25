const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

// @desc Register user
// @route POST /api/v1/auth/register
// @access PUBLIC
const registerUser = async (req, res, next) => {
	try {
		const { name, email, password, _id } = req.body;

		// Pre-hook .save() middleware will execute to hash password and create a cart for new user
		const newUser = await User.create({
			_id,
			name,
			email,
			password,
		});

		res.status(200).json({
			success: true,
			newUser: newUser,
		});
	} catch (e) {
		next(e);
	}
};

module.exports = {
	registerUser,
};
