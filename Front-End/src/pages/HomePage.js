import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFeaturedProducts } from "../store/featuredProduct-slice";
import Banner from "../components/HomePage/Banner";
import CategoryBanner from "../components/HomePage/CategoryBanner";
import FeaturedCategory from "../components/HomePage/FeaturedCategory";

function HomePage() {
	// Load the featured products into redux store using action creator thunk from redux
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchFeaturedProducts());
	}, [dispatch]);

	return (
		<>
			<Banner />
			<CategoryBanner />
			<FeaturedCategory />
		</>
	);
}

export default HomePage;
