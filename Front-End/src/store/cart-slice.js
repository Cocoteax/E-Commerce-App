import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
		const response = await axios.get(`http://localhost:5500/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

export const addToCart = (productID) => {
	return async (dispatch) => {
		await axios.post(`http://localhost:5500/api/v1/carts/${productID}`);
		const response = await axios.get(`http://localhost:5500/api/v1/carts`);
		const cartItems = response.data.data;
		dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
	};
};

export const removeFromCart = (productID) => {
	return async (dispatch) => {
		try {
			await axios.delete(`http://localhost:5500/api/v1/carts/${productID}`);
            console.log("made it past delete")
			const response = await axios.get(`http://localhost:5500/api/v1/carts`);
			const cartItems = response.data.data;
			dispatch(cartSlice.actions.loadCart({ cartItems: cartItems }));
		} catch (e) {
			console.log(e);
		}
	};
};

export const cartActions = cartSlice.actions;
export default cartSlice;
