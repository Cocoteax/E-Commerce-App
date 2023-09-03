import React, { useEffect } from "react";
import ShopAllHeader from "../components/ShopAllPage/ShopAllHeader";
import ShopAllItems from "../components/ShopAllPage/ShopAllItems";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/product-slice";

function ShopAllPage() {
	// Load all products into redux store for the shop all page
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<>
			<ShopAllHeader />
			<ShopAllItems />
		</>
	);
}

export default ShopAllPage;
