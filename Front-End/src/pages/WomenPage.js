import React, { useEffect } from "react";
import WomenHeader from "../components/WomenPage/WomenHeader";
import WomenItems from "../components/WomenPage/WomenItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchWomenProducts } from "../store/product-slice";

function WomenPage() {
	const fetchedWomenProducts = useSelector(
		(state) => state.productSlice.fetchedWomenProducts
	);
	const dispatch = useDispatch();
	// Load all women products into redux store for the women page
	useEffect(() => {
		if (!fetchedWomenProducts) {
			dispatch(fetchWomenProducts());
		}
	}, [dispatch, fetchedWomenProducts]);
	return (
		<>
			<WomenHeader />
			<WomenItems />
		</>
	);
}

export default WomenPage;
