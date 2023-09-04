import React from "react";
import CartHeader from "../components/CartPage/CartHeader";
import CartSection from "../components/CartPage/CartSection";

function CartPage() {
// NOTE: We fetch our cart data in app.js instead of here because we want to be able to update the cart using our useEffect() whenever user adds to cart outside of the cart page
// NOTE: If we fetch here, then our useEffect() to dispatch our updateCart() thunk will only execute whenever we navigate to cart page
	return (
		<>
			<CartHeader />
			<CartSection />
		</>
	);
}

export default CartPage;
