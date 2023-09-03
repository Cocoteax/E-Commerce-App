import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
	reducer: { productSlice: productSlice.reducer, cartSlice: cartSlice.reducer },
});

export default store;
