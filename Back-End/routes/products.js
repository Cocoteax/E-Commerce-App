const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

// /api/v1/products
router.route("/").get(productController.getAllProducts);

// /api/v1/products/featured
router.route("/featured").get(productController.getFeaturedProducts);

// /api/v1/products/women
router.route("/women").get(productController.getWomenProducts);

// /api/v1/products/men
router.route("/men").get(productController.getMenProducts);

// /api/v1/products/kids
router.route("/kids").get(productController.getKidsProducts);

// /api/v1/products/:productID
router.route("/:productID").get(productController.getSingleProduct);

module.exports = router;
