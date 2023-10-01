import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../components/Utility/BaseURL";
import cartSlice from "./cart-slice";

const orderSlice = createSlice({
	name: "order",
	initialState: {
		orders: [],
		fetchedOrders: false,
	},
	reducers: {
		loadOrder(state, action) {
			state.orders = action.payload.orders;
			state.fetchedOrders = true;
		},
		// Reducer to remove orders state from memory upon logout
		clearOrderOnLogout(state, action) {
			state.orders = [];
		},
	},
});

// Action thunk to load orders
export const fetchOrders = () => {
	return async (dispatch) => {
		try {
			console.log("fetching orders");
			const response = await axios.get(`${BASE_URL}/api/v1/orders`, {
				withCredentials: true,
			});
			const orders = response.data.data;
			dispatch(orderSlice.actions.loadOrder({ orders: orders }));
		} catch (e) {
			console.log(e);
		}
	};
};

// Action thunk to submit order based on cart
export const submitOrder = () => {
	return async (dispatch) => {
		try {
			console.log("Submitting orders");
			await axios.post(`${BASE_URL}/api/v1/orders`, null, {
				withCredentials: true,
			});
			dispatch(cartSlice.actions.resetCart());
		} catch (e) {
			console.log(e);
		}
	};
};

export const orderActions = orderSlice.actions;
export default orderSlice;
