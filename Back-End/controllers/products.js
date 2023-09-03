const Product = require("../models/Product");

// @desc    Get featured products for home page carousel
// @route   GET /api/v1/products/featured
// @access  PUBLIC
const getFeaturedProducts = async (req, res, next) => {
	try {
		const products = await Product.find({ featured: true }).select(
			"-description"
		);
		const chunkSize = 3; // Number of objects in each sub-array

		const result = Array.from(
			{ length: Math.ceil(products.length / chunkSize) },
			(_, index) => {
				const startIndex = index * chunkSize;
				return products.slice(startIndex, startIndex + chunkSize);
			}
		);

		const featuredProducts = result.map((subArray) =>
			subArray.map((item) => item)
		);
		res.status(200).json({
			success: true,
			count: products.length,
			data: featuredProducts,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Get all products for shop all page
// @route   GET /api/v1/products
// @access  PUBLIC
const getAllProducts = async (req, res, next) => {
	try {
		const products = await Product.find().select("-description");
		res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Get all products for women page
// @route   GET /api/v1/products/women
// @access  PUBLIC
const getWomenProducts = async (req, res, next) => {
	try {
		const products = await Product.find({ category: "Women" }).select(
			"-description"
		);
		res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Get all products for men page
// @route   GET /api/v1/products/women
// @access  PUBLIC
const getMenProducts = async (req, res, next) => {
	try {
		const products = await Product.find({ category: "Men" }).select(
			"-description"
		);
		res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Get all products for kids page
// @route   GET /api/v1/products/women
// @access  PUBLIC
const getKidsProducts = async (req, res, next) => {
	try {
		const products = await Product.find({ category: "Kids" }).select(
			"-description"
		);
		res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (e) {
		next(e);
	}
};

// @desc    Get all products for kids page
// @route   GET /api/v1/products/women
// @access  PUBLIC
const getSingleProduct = async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.productID);
		res.status(200).json({
			success: true,
			data: product,
		});
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getFeaturedProducts,
	getAllProducts,
	getWomenProducts,
	getMenProducts,
	getKidsProducts,
    getSingleProduct
};
