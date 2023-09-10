import React, { useEffect } from "react";
import ShopAllHeader from "../components/ShopAllPage/ShopAllHeader";
import ShopAllItems from "../components/ShopAllPage/ShopAllItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/product-slice";

function ShopAllPage() {
	// Redux state to prevent fetching again if already fetched
	const fetchedAllProducts = useSelector(
		(state) => state.productSlice.fetchedAllProducts
	);
	// Load all products into redux store for the shop all page
	const dispatch = useDispatch();
	useEffect(() => {
		if (!fetchedAllProducts) {
			dispatch(fetchAllProducts());
		}
	}, [dispatch, fetchedAllProducts]);

	return (
		<>
			<ShopAllHeader />
			<ShopAllItems />
		</>
	);
}

export default ShopAllPage;
