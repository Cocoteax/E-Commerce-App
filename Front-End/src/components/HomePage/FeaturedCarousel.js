import React from "react";
import styles from "./FeaturedCarousel.module.css";
import Item from "../Utility/Item";
import womenFeatured1 from "../../assets/women-fashion-1.avif";
import womenFeatured2 from "../../assets/women-fashion-2.avif";
import maleFeatured1 from "../../assets/male-fashion-1.avif";

// Need to hardcode these data in mongodb to create schema relationships
const items = [
	[
		{
			img: womenFeatured1,
			category: "Women",
			description: "White Suit",
			price: "$32.00",
		},
		{
			img: maleFeatured1,
			category: "Men",
			description: "Shirt",
			price: "$28.00",
		},
		{
			img: womenFeatured2,
			category: "Women",
			description: "Suit",
			price: "$45.00",
		},
	],
	[
		{
			img: womenFeatured1,
			category: "Women",
			description: "Suit",
			price: "$32.00",
		},
		{
			img: maleFeatured1,
			category: "Men",
			description: "Shirt",
			price: "$28.00",
		},
		{
			img: womenFeatured2,
			category: "Women",
			description: "Suit",
			price: "$45.00",
		},
	],
	[
		{
			img: womenFeatured1,
			category: "Women",
			description: "Suit",
			price: "$32.00",
		},
		{
			img: maleFeatured1,
			category: "Men",
			description: "Shirt",
			price: "$28.00",
		},
		{
			img: womenFeatured2,
			category: "Women",
			description: "Suit",
			price: "$45.00",
		},
	],
];

function FeaturedCarousel() {
	return (
		<>
			<div className={`container-fluid ${styles.container}`}>
				<div className="row">
					<div className="col-6">
						<h3 className={`${styles.carouselLabel}`}>Featured Items</h3>
					</div>
					<div className="col-6 text-end">
						<a
							className="btn btn-outline-dark mb-3 me-1"
							href="#featuredCarousel"
							role="button"
							data-bs-slide="prev"
						>
							<i className="fa fa-arrow-left"></i>
						</a>
						<a
							className="btn btn-outline-dark mb-3 "
							href="#featuredCarousel"
							role="button"
							data-bs-slide="next"
						>
							<i className="fa fa-arrow-right"></i>
						</a>
					</div>
				</div>
				<div className={`row`}>
					<div
						id="featuredCarousel"
						className="carousel slide"
						data-bs-ride="false"
						data-bs-slide="true"
					>
						<div className="carousel-inner">
							{/* <div className="carousel-item active">
								<div className={`row`}>
									<div className={`col-4 mb-3`}>
										<Item item={items[0][0]} />
									</div>
									<div className="col-4 mb-3">
										<Item item={items[0][1]} />
									</div>
									<div className="col-4 mb-3">
										<Item item={items[0][2]} />
									</div>
								</div>
							</div> */}
							{/* use .map() to create each carousel slide */}
							{items.map((item, index) => {
								return (
									<>
										{index === 0 && (
											<div className="carousel-item active" key={index}>
												<div className="row">
													<div className={`col-4 mb-3`}>
														<Item item={item[0]} />
													</div>
													<div className="col-4 mb-3">
														<Item item={item[1]} />
													</div>
													<div className="col-4 mb-3">
														<Item item={item[2]} />
													</div>
												</div>
											</div>
										)}
										{index !== 0 && (
											<div className="carousel-item" key={index}>
												<div className="row">
													<div className="col-4 mb-3">
														<div>
															<Item item={item[0]} />
														</div>
													</div>
													<div className="col-4 mb-3">
														<div>
															<Item item={item[1]} />
														</div>
													</div>
													<div className="col-4 mb-3">
														<div>
															<Item item={item[2]} />
														</div>
													</div>
												</div>
											</div>
										)}
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FeaturedCarousel;
