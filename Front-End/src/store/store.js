import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import authSlice from "./auth-slice";

const store = configureStore({
	reducer: {
		productSlice: productSlice.reducer,
		cartSlice: cartSlice.reducer,
		authSlice: authSlice.reducer,
	},
});

export default store;
