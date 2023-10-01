const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
	orderItems: [
		{
			_id: false, // Setting _id to false for each item in the array to ensure product is the _id
			product: {
				type: Schema.Types.ObjectId,
				ref: "Product",
				required: true,
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
		required: true,
	},
	totalPrice: {
		type: Number,
		required: true,
	},
	userID: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Order", OrderSchema, "orders");
