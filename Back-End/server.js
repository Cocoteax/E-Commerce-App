const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan"); // 3rd party logger
const cookieParser = require("cookie-parser"); // Handle cookies
const errorHandler = require("./middleware/error"); // Custom error handler
const cors = require("cors"); // Required to enable different domains to access API

// Load env variables from config.env file into process.env
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5500;
const NODE_ENV = process.env.NODE_ENV; // Get node env from npm scripts

// Import routes
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");
const authRoutes = require("./routes/auth");

// ========== Set up middlewares ========== //
app.use(bodyParser.urlencoded({ extended: false })); // For FORM html elements
app.use(bodyParser.json()); // For JSON input

// Logger for dev environment
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
// Cookie parser for setting & accessing cookies
app.use(cookieParser());

// Enable API to be public so that it can be accessed by different domains (Required for full stack applications)
const corsOptions = {
	origin: [
		"http://localhost:3000",
		"https://e-commerce-app-react-frontend.vercel.app",
	],
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Set static folder for serving static files such as images
// This allows the internet to be able to retrieve files from the local static folder by going to domain/public/filePath
app.use(express.static(path.join(__dirname, "public")));

// ========== Set up routes ========== //
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/auth", authRoutes);

// Error handler middleware
// NOTE: This middleware must come after routes since we pass the error to errorHandler by calling next() within controllers
app.use(errorHandler);

// ========== Start Application ========== //
const startApp = async () => {
	try {
		await connectDB();
		app.listen(
			PORT,
			console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
		);
	} catch (e) {
		console.log(e);
	}
};

startApp();

module.exports = app;
