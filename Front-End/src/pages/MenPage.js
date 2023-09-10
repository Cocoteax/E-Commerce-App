import React, { useEffect } from "react";
import MenHeader from "../components/MenPage/MenHeader";
import MenItems from "../components/MenPage/MenItems";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenProducts } from "../store/product-slice";

function MenPage() {
	const fetchedMenProducts = useSelector(
		(state) => state.productSlice.fetchedMenProducts
	);
	const dispatch = useDispatch();
	// Load all products into redux store for the men page
	useEffect(() => {
		if (!fetchedMenProducts) {
			dispatch(fetchMenProducts());
		}
	}, [dispatch, fetchedMenProducts]);
	return (
		<>
			<MenHeader />
			<MenItems />
		</>
	);
}

export default MenPage;
