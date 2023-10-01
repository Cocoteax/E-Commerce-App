const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders");
const { protectRoute } = require("../middleware/auth");

// /api/v1/orders
router
	.route("/")
	.post(protectRoute, orderController.postOrder)
	.get(protectRoute, orderController.getOrders);

module.exports = router;
