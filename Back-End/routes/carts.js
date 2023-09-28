const express = require("express");
const router = express.Router();
const cartController = require("../controllers/carts");
const { protectRoute } = require("../middleware/auth");

// /api/v1/cart
router
	.route("/")
	.get(protectRoute, cartController.getCart)
	.put(protectRoute, cartController.updateCart);

// /api/v1/cart/:productID
router
	.route("/:productID")
	.post(protectRoute, cartController.postCart)
	.delete(protectRoute, cartController.deleteFromCart);

module.exports = router;
