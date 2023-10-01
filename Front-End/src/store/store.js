import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";
import orderSlice from "./order-slice";

const store = configureStore({
	reducer: {
		productSlice: productSlice.reducer,
		cartSlice: cartSlice.reducer,
		authSlice: authSlice.reducer,
		orderSlice: orderSlice.reducer,
	},
});

export default store;
