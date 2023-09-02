import { configureStore } from "@reduxjs/toolkit";
import featuredProductSlice from "./featuredProduct-slice"

const store = configureStore({
    reducer: { featuredProductSlice: featuredProductSlice.reducer }
})

export default store;