import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavAndFooterLayout from "./pages/NavAndFooterLayout";
import Error from "./pages/Error";
import ShopAllPage from "./pages/ShopAllPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import CartPage from "./pages/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCart } from "./store/cart-slice";
import { cartActions } from "./store/cart-slice";
import React, { useEffect } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavAndFooterLayout />,
		children: [
			{
				index: true,
				path: "",
				element: <HomePage />,
			},
			{
				path: "products",
				element: <ShopAllPage />,
			},
			{
				path: "products/men",
				element: <MenPage />,
			},
			{
				path: "products/women",
				element: <WomenPage />,
			},
			{
				path: "products/kids",
				element: <KidsPage />,
			},
			{
				path: "products/:productID",
				element: <ItemDetailsPage />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
		],
		errorElement: <Error />,
	},
]);

function App() {
	// Fetch cart data (See CartPage.js on why we do it here)
	const dispatch = useDispatch();
	const fetchedCart = useSelector((state) => state.cartSlice.fetchedCart);
	const cartChanged = useSelector((state) => state.cartSlice.cartChanged);
	const cart = useSelector((state) => state.cartSlice.cart);

	// Load current cart products upon initial load
	useEffect(() => {
		// Fetch the cart once upon initial load
		if (!fetchedCart) {
			dispatch(fetchCart());
		}
	}, [dispatch, fetchedCart]);

	// useEffect to handle updating of cart state in the cart page
	useEffect(() => {
		// check whether cart has changed
		// NOTE: cartChanged will be modified only if we use the addToCartReducer and deleteFromCartReducer
		if (cartChanged) {
			console.log("cart changed... updating backend");
			// NOTE: By sending the update request only after the cart has changed, we can focus on responsiveness
			dispatch(updateCart(cart));
			dispatch(cartActions.resetCartChangedStatus());
		}
	}, [cart, dispatch, cartChanged]);

	return <RouterProvider router={router} />;
}

export default App;
