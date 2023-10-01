import React, { useEffect } from "react";
import CartHeader from "../components/CartPage/CartHeader";
import CartSection from "../components/CartPage/CartSection";
import { fetchCart } from "../store/cart-slice";
import { useDispatch } from "react-redux";

function CartPage() {
	// NOTE: We fetch our cart data in app.js because we want to be able to update the cart using our useEffect() whenever user adds to cart outside of the cart page
	// However, we fetch it again here to ensure images refresh upon cart page load
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCart());
	}, [dispatch]);
	return (
		<>
			<CartHeader />
			<CartSection />
		</>
	);
}

export default CartPage;
