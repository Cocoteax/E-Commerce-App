import React, { useEffect } from "react";
import CartHeader from "../components/CartPage/CartHeader";
import CartSection from "../components/CartPage/CartSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCart } from "../store/cart-slice";
import { cartActions } from "../store/cart-slice";

function CartPage() {
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
	// NOTE: By sending the update request only after the cart has changed, we can focus on responsiveness
	useEffect(() => {
		// check whether cart has changed
        // NOTE: cartChanged will be modified only if we use the addToCartReducer and deleteFromCartReducer. It will not be modified if we use addToCart or deleteFromCart thunks.
		if (cartChanged) {
			console.log("cart changed... updating backend");
			dispatch(updateCart(cart));
			dispatch(cartActions.resetCartChangedStatus());
		}
	}, [cart, dispatch, cartChanged]);
	return (
		<>
			<CartHeader />
			<CartSection />
		</>
	);
}

export default CartPage;
