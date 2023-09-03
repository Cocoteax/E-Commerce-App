import React, { useEffect } from "react";
import MenHeader from "../components/MenPage/MenHeader";
import MenItems from "../components/MenPage/MenItems";
import { useDispatch } from "react-redux";
import { fetchMenProducts } from "../store/product-slice";

function MenPage() {
	const dispatch = useDispatch();
	// Load all products into redux store for the men page
	useEffect(() => {
		dispatch(fetchMenProducts());
	}, [dispatch]);
	return (
		<>
			<MenHeader />
			<MenItems />
		</>
	);
}

export default MenPage;
