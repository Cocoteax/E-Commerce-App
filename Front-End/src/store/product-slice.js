import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
	name: "products",
	initialState: {
		featuredProducts: [],
		fetchedFeatured: false,
		allProducts: [],
		womenProducts: [],
		menProducts: [],
		kidsProducts: [],
		singleProduct: [],
	},
	reducers: {
		loadFeaturedProducts(state, action) {
			state.featuredProducts = action.payload.products;
			state.fetchedFeatured = true;
		},
		loadAllProducts(state, action) {
			state.allProducts = action.payload.products;
		},
		loadMenProducts(state, action) {
			state.menProducts = action.payload.products;
		},
		loadWomenProducts(state, action) {
			state.womenProducts = action.payload.products;
		},
		loadKidsProducts(state, action) {
			state.kidsProducts = action.payload.products;
		},
		loadSingleProduct(state, action) {
			state.singleProduct = action.payload.products;
		},
		resetSingleProduct(state, action) {
			state.singleProduct = [];
		},
	},
});

// Use action thunks to make http requests and dispatch redux actions together
export const fetchFeaturedProducts = () => {
	return async (dispatch) => {
		const response = await axios.get(
			"http://localhost:5500/api/v1/products/featured"
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadFeaturedProducts({ products: products }));
	};
};

export const fetchAllProducts = () => {
	return async (dispatch) => {
		const response = await axios.get("http://localhost:5500/api/v1/products");
		const products = response.data.data;
		dispatch(productSlice.actions.loadAllProducts({ products: products }));
	};
};

export const fetchMenProducts = () => {
	return async (dispatch) => {
		const response = await axios.get(
			"http://localhost:5500/api/v1/products/men"
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadMenProducts({ products: products }));
	};
};

export const fetchWomenProducts = () => {
	return async (dispatch) => {
		const response = await axios.get(
			"http://localhost:5500/api/v1/products/women"
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadWomenProducts({ products: products }));
	};
};

export const fetchKidsProducts = () => {
	return async (dispatch) => {
		const response = await axios.get(
			"http://localhost:5500/api/v1/products/kids"
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadKidsProducts({ products: products }));
	};
};

export const fetchProductDetails = (productID) => {
	return async (dispatch) => {
		const response = await axios.get(
			`http://localhost:5500/api/v1/products/${productID}`
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadSingleProduct({ products: products }));
	};
};

export const productActions = productSlice.actions;
export default productSlice;
