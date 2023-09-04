const express = require("express");
const router = express.Router();
const cartController = require("../controllers/carts");

// /api/v1/cart
router.route("/").get(cartController.getCart).put(cartController.updateCart);

// /api/v1/cart/:productID
router
	.route("/:productID")
	.post(cartController.postCart)
	.delete(cartController.deleteFromCart);

module.exports = router;
