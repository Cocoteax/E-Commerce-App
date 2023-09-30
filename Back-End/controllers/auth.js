const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

// @desc Register user
// @route POST /api/v1/auth/register
// @access PUBLIC
const registerUser = async (req, res, next) => {
	try {
		const { name, email, password, _id } = req.body;

		// Check for valid input
		if (!name || !email || !password) {
			return next(new ErrorResponse(`Invalid Credentials!`, 400));
		}

		// Pre-hook .save() middleware will execute to hash password and create a cart for new user
		const newUser = await User.create({
			_id,
			name,
			email,
			password,
		});

		// Send back JWT to client and store it in httpOnly cookie
		sendTokenResponse(newUser, 200, res);
	} catch (e) {
		next(e);
	}
};

// @desc Login user
// @route POST /api/v1/auth/login
// @access PUBLIC
const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		// Check for valid input
		if (!email || !password) {
			return next(
				new ErrorResponse(`Please provide an email and password!`, 401)
			);
		}

		// Get user via email
		const user = await User.findOne({ email: email }).select("+password");

		if (!user) {
			return next(new ErrorResponse(`User does not exist`, 400));
		}

		// Verify user password
		const isValidPassword = await user.validatePassword(password);
		if (!isValidPassword) {
			return next(new ErrorResponse(`Invalid Credentials`, 401));
		}

		sendTokenResponse(user, 200, res);
	} catch (e) {
		next(e);
	}
};

// @desc Logout User
// @route POST /api/v1/auth/logout
// @access PRIVATE
const logoutUser = async (req, res, next) => {
	try {
		// Check if user is logged in by checking cookies
		// NOTE: If we use bearer authentication, we can check if authorization header has been sent by client. If no, then return error.
		if (!req.cookies.token) {
			console.log("No token found");
			return next(new ErrorResponse(`User is currently not logged in`, 400));
		}

		// Options for setting cookie
		const options = {
			expires: new Date(Date.now() + 10 * 1000), // Set cookie to expire in 10s
			httpOnly: true, // Ensure cookies can only be manipulated by server and not client
		};

		// Set secure flag HTTPS if in production
		if (process.env.NODE_ENV === "production") {
			options.secure = true;
			options.sameSite = "none";
		}

		// Set JWT to none when user logs out and make it expire in 10s
		// NOTE: When cookie expires, it becomes cleared
		res.cookie("token", "none", options);

		res.status(200).json({
			success: true,
			data: "User successfully logged out",
		});
	} catch (e) {
		next(e);
	}
};

// @desc Validate JWT for user persistance
// @route POST /api/v1/auth/validateToken
// @access PRVATE
const validateToken = async (req, res, next) => {
	try {
		// This route will pass through protectRoute middleware, hence if no token, there will be no req.user
		if (!req.user) {
			return next(new ErrorResponse(`No user currently logged in`, 400));
		}
		sendTokenResponse(req.user, 200, res);
	} catch (e) {
		next(e);
	}
};

// Custom function to get token from model, set cookie, and send response
const sendTokenResponse = (user, statusCode, res) => {
	const token = user.getSignedJwtToken();

	// Options for setting cookie
	const options = {
		// Date(ms) => Need to set cookie to expire in 30 days
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 1000 * 60 * 60 * 24
		),
		httpOnly: true, // Ensure cookies can only be manipulated by server and not client
	};

	// Set secure flag HTTPS if in production
	if (process.env.NODE_ENV === "production") {
		options.secure = true;
		options.sameSite = "none";
	}

	// Send back response with status and set cookie with res.cookie
	res.status(statusCode).cookie("token", token, options).json({
		success: true,
		token: token,
	});
};

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	validateToken,
};
