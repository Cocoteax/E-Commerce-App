import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		loadCart(state, action) {
			state.cart = action.payload.cartItems;
		},
	},
});

export const fetchCart = () => {
	return async (dispatch) => {
		const response = await axios.get(`${BASE_URL}/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

export const addToCart = (productID) => {
	return async (dispatch) => {
		await axios.post(`${BASE_URL}/api/v1/carts/${productID}`);
		const response = await axios.get(`${BASE_URL}/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

export const removeFromCart = (productID) => {
	return async (dispatch) => {
		try {
			await axios.delete(`${BASE_URL}/api/v1/carts/${productID}`);
			const response = await axios.get(`${BASE_URL}/api/v1/carts`);
			const cartItems = response.data.data;
			dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
		} catch (e) {
			console.log(e);
		}
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
