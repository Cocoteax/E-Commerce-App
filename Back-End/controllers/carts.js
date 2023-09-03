const Cart = require("../models/Cart");
const Product = require("../models/Product");

// @desc    Get cart for specific user
// @route   GET /api/v1/cart
// @access  PRIVATE
const getCart = async (req, res, next) => {
	try {
		// Use .populate() to populate the products in the cart
		const cart = await Cart.findOne().populate({
			path: "items.productID",
			select: "title category price",
		});
		res.status(200).json({
			success: true,
			data: cart,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Add product to cart
// @route   POST /api/v1/cart/:productID
// @access  PRIVATE
const postCart = async (req, res, next) => {
	// Add error handling
	try {
		const { productID } = req.params;
		// Get product to be added
		const product = await Product.findById(productID).select("-description");
		// Get current cart
		const cart = await Cart.findById("64f42c212be8c8af6cd32c39");

		let existingItemIndex = -1;

		// Check if item exists in cart
		existingItemIndex = cart.items.findIndex(
			(item) => item.productID.toString() === productID.toString()
		);

		// item exists, update cart
		if (existingItemIndex > -1) {
			cart.items[existingItemIndex].quantity += 1;
			cart.items[existingItemIndex].subtotal += product.price;
			cart.totalQuantity += 1;
			cart.totalPrice += product.price;
		}
		// new item, create new cart product
		else {
			cart.items.push({
				productID: productID,
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

// @desc    Remove product from cart
// @route   DELETE /api/v1/cart/:productID
// @access  PRIVATE
const deleteFromCart = async (req, res, next) => {
	// Add error handling
	try {
		const { productID } = req.params;
		// Get product to be removed
		const product = await Product.findById(productID);

		// Get cart
		const cart = await Cart.findById("64f42c212be8c8af6cd32c39");

		let existingItemIndex = -1;

		// Check if item exists in cart
		existingItemIndex = cart.items.findIndex(
			(item) => item.productID.toString() === productID.toString()
		);

		// Item exists, check for quantity
		if (existingItemIndex > -1) {
			// Only 1 quantity in cart, remove completely
			if (cart.items[existingItemIndex].quantity === 1) {
				// Update properties of cart
				cart.items[existingItemIndex].quantity -= 1;
				cart.items[existingItemIndex].subtotal -= product.price;
				cart.totalQuantity -= 1;
				cart.totalPrice -= product.price;

				// Remove from cart completely
				cart.items = cart.items.filter(
					(item) => item.productID.toString() !== productID
				);
				console.log(cart.items);
			}
			// More than 1 quantity, just reduce by 1
			else {
				cart.items[existingItemIndex].quantity -= 1;
				cart.items[existingItemIndex].subtotal -= product.price;
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

module.exports = {
	getCart,
	postCart,
	deleteFromCart,
};
