const Order = require("../models/Order");
const Cart = require("../models/Cart");
const ErrorResponse = require("../utils/errorResponse");

// @desc Create a new order based on cart items
// @route POST /api/v1/orders
// @access PRIVATE
const postOrder = async (req, res, next) => {
	try {
		const cart = await Cart.findOne({ userID: req.user._id });
		if (cart.cartItems.length === 0) {
			return next(new ErrorResponse(`Cart has no items`, 400));
		}

		// Transform cart items into order items
		const orderData = {
			orderItems: cart.cartItems,
			totalQuantity: cart.totalQuantity,
			totalPrice: cart.totalPrice,
			userID: req.user._id,
		};

		// Create a new order with orderData
		const newOrder = await Order.create(orderData);
		res.status(200).json({
			success: true,
			data: newOrder,
		});
	} catch (e) {
		next(e);
	}
};

// @desc Get all orders for a user
// @route GET /api/v1/orders
// @access PRIVATE
const getOrders = async (req, res, next) => {
	try {
		const orders = await Order.find({ userID: req.user._id })
			.populate({
				path: "orderItems.product",
				select: "title price",
			})
			.sort("-createdAt");
		res.status(200).json({
			success: true,
			data: orders,
		});
	} catch (e) {
		next(e);
	}
};

module.exports = { postOrder, getOrders };
