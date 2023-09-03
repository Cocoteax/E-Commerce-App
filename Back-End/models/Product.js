const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	title: {
		type: String,
		required: [true, "Please add a product title"],
		maxLength: [50, "Name cannot be more than 50 characters"],
	},
	category: {
		type: String,
		required: [true, "Please add a product category"],
		enum: ["Women", "Men", "Kids"], // Ensure that category can only take on these values and nothing else
	},
	price: {
		type: Number,
		required: [true, "Please add a product price"],
	},
	description: {
		type: String,
		required: [true, "Please add a product description"],
	},
	imageURL: {
		type: String,
		default: "no-photo.jpg",
	},
	featured: {
		type: Boolean,
		required: [true, "Please state if featured or not (Boolean)"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Product", ProductSchema, "products");
