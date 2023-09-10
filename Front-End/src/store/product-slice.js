import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";

const productSlice = createSlice({
	name: "products",
	initialState: {
		featuredProducts: [],
		fetchedFeatured: false,
		allProducts: [],
		fetchedAllProducts: false,
		allProductsFilter: "Default Sorting",
		womenProducts: [],
		fetchedWomenProducts: false,
		womenProductsFilter: "Default Sorting",
		menProducts: [],
		fetchedMenProducts: false,
		menProductsFilter: "Default Sorting",
		kidsProducts: [],
		kidsProductFilter: "Default Sorting",
		fetchedKidsProducts: false,
		singleProduct: [],
	},
	reducers: {
		loadFeaturedProducts(state, action) {
			state.featuredProducts = action.payload.products;
			state.fetchedFeatured = true;
		},
		loadAllProducts(state, action) {
			state.allProducts = action.payload.products;
			state.fetchedAllProducts = true;
		},
		changeAllProductsFilter(state, action) {
			state.allProductsFilter = action.payload.filter;
		},
		loadMenProducts(state, action) {
			state.menProducts = action.payload.products;
			state.fetchedMenProducts = true;
		},
		changeMenProductsFilter(state, action) {
			state.menProductsFilter = action.payload.filter;
		},
		loadWomenProducts(state, action) {
			state.womenProducts = action.payload.products;
			state.fetchedWomenProducts = true;
		},
		changeWomenProductsFilter(state, action) {
			state.womenProductsFilter = action.payload.filter;
		},
		loadKidsProducts(state, action) {
			state.kidsProducts = action.payload.products;
			state.fetchedKidsProducts = true;
		},
		changeKidsProductsFitler(state, action) {
			state.kidsProductFilter = action.payload.filter;
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
		console.log("fetching featured products");
		const response = await axios.get(`${BASE_URL}/api/v1/products/featured`);
		const products = response.data.data;
		dispatch(productSlice.actions.loadFeaturedProducts({ products: products }));
	};
};

export const fetchAllProducts = (sortBy) => {
	return async (dispatch) => {
		console.log("fetching all producs");
		if (sortBy === undefined) {
			console.log("No sorting");
			const response = await axios.get(`${BASE_URL}/api/v1/products`);
			const products = response.data.data;
			dispatch(productSlice.actions.loadAllProducts({ products: products }));
		} else {
			console.log(`fetching all products, sorted by: ${sortBy}`);
			const response = await axios.get(
				`${BASE_URL}/api/v1/products/?sort=${sortBy}`
			);
			const products = response.data.data;
			dispatch(productSlice.actions.loadAllProducts({ products: products }));
		}
	};
};

export const fetchMenProducts = (sortBy) => {
	return async (dispatch) => {
		console.log("fetching men products");

		if (sortBy === undefined) {
			console.log("No sorting");
			const response = await axios.get(`${BASE_URL}/api/v1/products/men`);
			const products = response.data.data;
			dispatch(productSlice.actions.loadMenProducts({ products: products }));
		} else {
			console.log(`fetching men products, sorted by: ${sortBy}`);
			const response = await axios.get(
				`${BASE_URL}/api/v1/products/men/?sort=${sortBy}`
			);
			const products = response.data.data;
			dispatch(productSlice.actions.loadMenProducts({ products: products }));
		}
	};
};

export const fetchWomenProducts = (sortBy) => {
	return async (dispatch) => {
		console.log("fetching women products");
		if (sortBy === undefined) {
			console.log("No sorting");
			const response = await axios.get(`${BASE_URL}/api/v1/products/women`);
			const products = response.data.data;
			dispatch(productSlice.actions.loadWomenProducts({ products: products }));
		} else {
			console.log(`fetching women products, sorted by: ${sortBy}`);
			const response = await axios.get(
				`${BASE_URL}/api/v1/products/women/?sort=${sortBy}`
			);
			const products = response.data.data;
			dispatch(productSlice.actions.loadWomenProducts({ products: products }));
		}
	};
};

export const fetchKidsProducts = (sortBy) => {
	return async (dispatch) => {
		console.log("fetching kids products");

		if (sortBy === undefined) {
			console.log("No sorting");
			const response = await axios.get(`${BASE_URL}/api/v1/products/kids`);
			const products = response.data.data;
			dispatch(productSlice.actions.loadKidsProducts({ products: products }));
		} else {
			console.log(`fetching men products, sorted by: ${sortBy}`);
			const response = await axios.get(
				`${BASE_URL}/api/v1/products/kids/?sort=${sortBy}`
			);
			const products = response.data.data;
			dispatch(productSlice.actions.loadKidsProducts({ products: products }));
		}
	};
};

export const fetchProductDetails = (productID) => {
	return async (dispatch) => {
		console.log("fetching product detail");
		const response = await axios.get(
			`${BASE_URL}/api/v1/products/${productID}`
		);
		const products = response.data.data;
		dispatch(productSlice.actions.loadSingleProduct({ products: products }));
	};
};

export const productActions = productSlice.actions;
export default productSlice;
