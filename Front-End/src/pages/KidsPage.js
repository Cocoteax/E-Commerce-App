import React, { useEffect } from "react";
import KidsHeader from "../components/KidsPage/KidsHeader";
import KidsItem from "../components/KidsPage/KidsItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchKidsProducts } from "../store/product-slice";

function KidsPage() {
	const fetchedKidsProducts = useSelector(
		(state) => state.productSlice.fetchedKidsProducts
	);
	const dispatch = useDispatch();
	// Load all products into redux store for the men page
	useEffect(() => {
		if (!fetchedKidsProducts) {
			dispatch(fetchKidsProducts());
		}
	}, [dispatch, fetchedKidsProducts]);
	return (
		<>
			<KidsHeader />
			<KidsItem />
		</>
	);
}

export default KidsPage;
