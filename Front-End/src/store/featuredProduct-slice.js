import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const featuredProductSlice = createSlice({
	name: "featuredProducts",
	initialState: {
		featuredProducts: [],
	},
	reducers: {
		loadFeaturedProducts(state, action) {
			state.featuredProducts = action.payload.products;
		},
	},
});

// Use action creator thunk to make http requests and dispatch redux actions together
export const fetchFeaturedProducts = () => {
	return async (dispatch) => {
		const response = await axios.get(
			"http://localhost:5500/api/v1/products/featured"
		);
		const products = response.data.data;
		dispatch(featuredProductSlice.actions.loadFeaturedProducts({products:products}));
	};
};
export const featuredProductActions = featuredProductSlice.actions;
export default featuredProductSlice;
