import React from "react";
import Banner from "./Banner";
import CategoryBanner from "./CategoryBanner";
import FeaturedCategory from "./FeaturedCategory"

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
