import React, { useEffect } from "react";
import CartHeader from "../components/CartPage/CartHeader";
import CartSection from "../components/CartPage/CartSection";
import { useDispatch } from "react-redux";
import { fetchCart } from "../store/cart-slice";

function CartPage() {
	const dispatch = useDispatch();
	// Load all products into redux store for the men page
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
