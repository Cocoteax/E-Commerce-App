import React from "react";
import Banner from "../components/HomePage/Banner"
import CategoryBanner from "../components/HomePage/CategoryBanner";
import FeaturedCategory from "../components/HomePage/FeaturedCategory"

function HomePage() {
  return (
    <>
      <Banner />
      <CategoryBanner />
      <FeaturedCategory />
    </>
  );
}

export default HomePage;
