const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// ========== mongoose method ========== //
const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
	},
	email: {
		type: String,
		required: [true, "Please add an email"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
		unique: true,
		// Handle custom validation at schema level
		validate: [
			{
				// Validation for unique email
				validator: async function (emailValue) {
					const existingEmail = await mongoose
						.model("User")
						.findOne({ email: emailValue });
					if (existingEmail) {
						return false; // Returning false or throwing an error indicates validation failed
					}
				},
				message: "Email taken, please choose another email",
			},
		],
	},
	password: {
		type: String,
		required: [true, "Please add a password"],
		minLength: [6, "Please enter a password with more than length 6"],
		select: false, // Avoid returning password when we query for user documents
	},
});

// Use mongoose pre-middleware to encrypt password using bcryptjs before saving to db
UserSchema.pre("save", async function (next) {
	// Only run this middlware if password was modified
	if (!this.isModified("password")) {
		next();
	}
	// To use bcryptjs, we need to generate a salt using genSalt
	// NOTE: genSalt() accepts the number of hashing rounds as an argument. 10 is sufficient
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt); // Encrypt password
	next();
});

// Use mongoose pre-middleware to create a new cart automatically when user registers for the first time
UserSchema.pre("save", async function (next) {
	if (!this.isNew) {
		console.log("user exists");
		next();
	}
	// Create a new cart for user
	await mongoose.model("Cart").create({
		cartItems: [],
		totalQuantity: 0,
		totalPrice: 0,
		userID: this._id,
	});
	next();
});

module.exports = mongoose.model("User", UserSchema, "users");
