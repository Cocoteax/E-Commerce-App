const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
	cartItems: [
		{
			product: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "Product", // Reference the product collection
			},
			quantity: {
				type: Number,
				required: true,
			},
			subtotal: {
				type: Number,
				required: true,
			},
		},
	],
	totalQuantity: {
		type: Number,
	},
	totalPrice: {
		type: Number,
	},
	userID: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
});

module.exports = mongoose.model("Cart", CartSchema, "carts");
