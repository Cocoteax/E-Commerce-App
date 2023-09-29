const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { protectRoute } = require("../middleware/auth");

// /api/v1/auth/register
router.route("/register").post(authController.registerUser);

// /api/v1/auth/login
router.route("/login").post(authController.loginUser);

// /api/v1/auth/logout
router.route("/logout").post(authController.logoutUser);

// /api/v1/auth/validateToken
router.route("/validateToken").post(protectRoute, authController.validateToken);

module.exports = router;
