import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedProducts } from "../store/product-slice";
import Banner from "../components/HomePage/Banner";
import CategoryBanner from "../components/HomePage/CategoryBanner";
import FeaturedCategory from "../components/HomePage/FeaturedCategory";

function HomePage() {
	// Redux state to prevent fetching again if already fetched
	const hasFetchedData = useSelector(
		(state) => state.productSlice.fetchedFeatured
	);
	const dispatch = useDispatch();
	// Load the featured products into redux store using action thunks from redux
	useEffect(() => {
		if (!hasFetchedData) {
			dispatch(fetchFeaturedProducts());
		}
	}, [dispatch, hasFetchedData]);

	return (
		<>
			<Banner />
			<CategoryBanner />
			<FeaturedCategory />
		</>
	);
}

export default HomePage;
