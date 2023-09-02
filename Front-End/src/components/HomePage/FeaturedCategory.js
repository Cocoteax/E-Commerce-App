import React from "react";
import styles from "./FeaturedCategory.module.css";
import featuredSideBanner from "../../assets/Featured Side Banner.avif";
import FeaturedCarousel from "./FeaturedCarousel";
import { Link } from "react-router-dom";

function FeaturedCategory() {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<section className={`mb-5`}>
			<div className={`container-fluid ${styles.container}`}>
				<div className="row gy-3">
					<div className={`col-md-3 ${styles.column}`}>
						<img
							src={featuredSideBanner}
                            alt="sidebanner"
							className={`img-fluid ${styles.sideBannerImg}`}
						></img>
						<span className={`${styles.sideBannerText}`}>
							<h2 className={`${styles.sideBannerH2}`}>Featured</h2>
							<Link
								to="products"
								className={`${styles.sideBannerLink}`}
								onClick={scrollToTop}
							>
								Discover More
							</Link>
						</span>
					</div>
					<div className="col-md-9">
						<FeaturedCarousel />
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturedCategory;
