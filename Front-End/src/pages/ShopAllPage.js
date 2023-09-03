import React, { useEffect } from "react";
import ShopAllHeader from "../components/ShopAllPage/ShopAllHeader";
import ShopAllItems from "../components/ShopAllPage/ShopAllItems";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../store/product-slice";

function ShopAllPage() {
	const navigate = useNavigate();
	const navigateToItemDetail = () => {
		navigate("peasd");
	};

	// Load all products into redux store for the shop all page
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, [dispatch]);

	return (
		<>
			<ShopAllHeader />
			<ShopAllItems />
			<button onClick={navigateToItemDetail}>
				Clickme to go to item details
			</button>
		</>
	);
}

export default ShopAllPage;
