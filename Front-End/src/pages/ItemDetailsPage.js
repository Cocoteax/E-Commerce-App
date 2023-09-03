import React, { useEffect } from "react";
import ItemDetails from "../components/Utility/ItemDetails";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductDetails } from "../store/product-slice";
import { productActions } from "../store/product-slice";

function ItemDetailsPage() {
	const dispatch = useDispatch();
	// Fetch item details based on url
	const params = useParams();

	// Fetching of product details will execute whenever the params change
	useEffect(() => {
		console.log(params.productID);
		dispatch(fetchProductDetails(params.productID));

		// Clean up function to clear data for items detail page when component unmounts (user navigates away from the page)
		// return () => {
		// 	dispatch(productActions.loadSingleProduct({ products: [] }));
		// };
	}, [dispatch, params]);
	return <ItemDetails />;
}

export default ItemDetailsPage;
