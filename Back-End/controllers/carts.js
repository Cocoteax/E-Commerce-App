const Cart = require("../models/Cart");
const Product = require("../models/Product");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get cart for specific user
// @route   GET /api/v1/cart
// @access  PRIVATE
const getCart = async (req, res, next) => {
	try {
		// Use .populate() to populate the products in the cart
		let cart = await Cart.findOne({ userID: req.user._id }).populate({
			path: "cartItems.product",
			select: "title category price imageURL",
		});
		res.status(200).json({
			success: true,
			data: cart,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Add product to cart (For Testing Purposes)
// @route   POST /api/v1/cart/:productID
// @access  PRIVATE
const postCart = async (req, res, next) => {
	// Add error handling
	try {
		const { productID } = req.params;
		// Get product to be added
		const product = await Product.findById(productID).select("-description");
		// Get current cart
		let cart = await Cart.findOne({ userID: req.user._id });

		let existingItemIndex = -1;

		// Check if item exists in cart
		existingItemIndex = cart.cartItems.findIndex(
			(item) => item.product.toString() === productID.toString()
		);

		// item exists, update cart
		if (existingItemIndex > -1) {
			cart.cartItems[existingItemIndex].quantity += 1;
			cart.cartItems[existingItemIndex].subtotal += product.price;
			cart.totalQuantity += 1;
			cart.totalPrice += product.price;
		}
		// new item, create new cart product
		else {
			cart.cartItems.push({
				product: productID,
				quantity: 1,
				subtotal: product.price,
				_id: productID,
			});
			cart.totalQuantity += 1;
			cart.totalPrice += product.price;
		}

		// Update cart schema
		await cart.save();
		res.status(200).json({
			success: true,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Remove product from cart (For Testing Purposes)
// @route   DELETE /api/v1/cart/:productID
// @access  PRIVATE
const deleteFromCart = async (req, res, next) => {
	// Add error handling
	try {
		const { productID } = req.params;
		// Get product to be removed
		const product = await Product.findById(productID);

		// Get cart
		let cart = await Cart.findOne({ userID: req.user._id });

		let existingItemIndex = -1;

		// Check if item exists in cart
		existingItemIndex = cart.cartItems.findIndex(
			(item) => item.product.toString() === productID.toString()
		);

		// Item exists, check for quantity
		if (existingItemIndex > -1) {
			// Only 1 quantity in cart, remove completely
			if (cart.cartItems[existingItemIndex].quantity === 1) {
				// Update properties of cart
				cart.cartItems[existingItemIndex].quantity -= 1;
				cart.cartItems[existingItemIndex].subtotal -= product.price;
				cart.totalQuantity -= 1;
				cart.totalPrice -= product.price;

				// Remove from cart completely
				cart.cartItems = cart.cartItems.filter(
					(item) => item.product.toString() !== productID
				);
			}
			// More than 1 quantity, just reduce by 1
			else {
				cart.cartItems[existingItemIndex].quantity -= 1;
				cart.cartItems[existingItemIndex].subtotal -= product.price;
				cart.totalQuantity -= 1;
				cart.totalPrice -= product.price;
			}

			// Update cart
			// Update cart schema
			await cart.save();
			res.status(200).json({
				success: true,
			});
		} else {
			res.status(400).json({
				success: false,
				error: `Product with id of ${productID} does not exist in cart`,
			});
		}
	} catch (e) {
		next(e);
	}
};

// @desc    Update entire cart
// @route   PUT /api/v1/cart
// @access  PRIVATE
const updateCart = async (req, res, next) => {
	try {
		const updatedCart = req.body.cart;

		// Update current cart
		// findByIdAndUpdate accepts 4 parameters: filter, update, options, callback
		// Get user's cart
		let cart = await Cart.findOne({ userID: req.user._id });
		const newCart = await Cart.findByIdAndUpdate(
			cart._id,
			{ $set: updatedCart },
			{ new: true, runValidators: true }
		);

		res.status(200).json({
			success: true,
			data: newCart,
		});
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getCart,
	postCart,
	deleteFromCart,
	updateCart,
};
