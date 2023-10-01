// Script to import data into mongoDB automatically
const fs = require("fs");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB();

// Read JSON data files
const products = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/products.json`)
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`));

// const carts = JSON.parse(fs.readFileSync(`${__dirname}/_data/carts.json`));

// Import JSON data into DB
const importData = async () => {
	try {
		await Product.create(products);
		await User.create(users);
		// await Cart.create(carts);
		console.log("Data Imported...");
		process.exit();
	} catch (e) {
		console.log(e);
	}
};

// Delete all JSON data from DB
const deleteData = async () => {
	try {
		await Product.deleteMany();
		await User.deleteMany();
		await Cart.deleteMany();
		await Order.deleteMany();
		console.log("Data Deleted...");
		process.exit();
	} catch (e) {
		console.log(e);
	}
};

const resetData = async () => {
	try {
		await Product.deleteMany();
		await User.deleteMany();
		await Cart.deleteMany();
		await Order.deleteMany();
		console.log("Data Deleted...");
		await Product.create(products);
		await User.create(users);
		// await Cart.create(carts);
		console.log("Data Imported...");
		process.exit();
	} catch (e) {
		console.log(e);
	}
};

// Import or delete depending on how we run our seeder script in command line
if (process.argv[2] === "-i") {
	importData();
} else if (process.argv[2] === "-d") {
	deleteData();
} else if (process.argv[2] === "-r") {
	resetData();
}
