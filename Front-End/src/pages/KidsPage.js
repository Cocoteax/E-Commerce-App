import React, { useEffect } from "react";
import KidsHeader from "../components/KidsPage/KidsHeader";
import KidsItem from "../components/KidsPage/KidsItems";
import { useDispatch } from "react-redux";
import { fetchKidsProducts } from "../store/product-slice";

function KidsPage() {
	const dispatch = useDispatch();
	// Load all products into redux store for the men page
	useEffect(() => {
		dispatch(fetchKidsProducts());
	}, [dispatch]);
	return (
		<>
			<KidsHeader />
			<KidsItem />
		</>
	);
}

export default KidsPage;
