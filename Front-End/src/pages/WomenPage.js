import React, { useEffect } from "react";
import WomenHeader from "../components/WomenPage/WomenHeader";
import WomenItems from "../components/WomenPage/WomenItems";
import { useDispatch } from "react-redux";
import { fetchWomenProducts } from "../store/product-slice";

function WomenPage() {
	const dispatch = useDispatch();
	// Load all women products into redux store for the women page
	useEffect(() => {
		dispatch(fetchWomenProducts());
	}, [dispatch]);
	return (
		<>
			<WomenHeader />
			<WomenItems />
		</>
	);
}

export default WomenPage;
