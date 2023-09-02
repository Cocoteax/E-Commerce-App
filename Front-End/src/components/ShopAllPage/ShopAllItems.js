import React, { useEffect } from "react";
import styles from "./ShopAllItems.module.css";
import womenFashion1 from "../../assets/women-fashion-1.avif";
import womenFashion2 from "../../assets/women-fashion-2.avif";
import womenFashion3 from "../../assets/women-fashion-3.avif";
import womenFashion4 from "../../assets/women-fashion-4.avif";
import maleFashion1 from "../../assets/male-fashion-1.avif";
import maleFashion2 from "../../assets/male-fashion-2.avif";
import maleFashion3 from "../../assets/male-fashion-3.avif";
import maleFashion4 from "../../assets/male-fashion-4.avif";
import Item from "../Utility/Item";

// // Need to hardcode these data in mongodb to create schema relationships
const items = [
	{
		img: womenFashion1,
		category: "Women",
		description: "White Suit",
		price: "$32.00",
	},
	{
		img: maleFashion1,
		category: "Men",
		description: "Shirt",
		price: "$28.00",
	},
	{
		img: womenFashion2,
		category: "Women",
		description: "Suit",
		price: "$45.00",
	},
	{
		img: maleFashion2,
		category: "Male",
		description: "Shirt",
		price: "$45.00",
	},
	{
		img: maleFashion3,
		category: "Male",
		description: "Shirt",
		price: "$45.00",
	},
	{
		img: womenFashion3,
		category: "Women",
		description: "Suit",
		price: "$45.00",
	},
	{
		img: maleFashion4,
		category: "Male",
		description: "Shirt",
		price: "$45.00",
	},
	{
		img: womenFashion4,
		category: "Women",
		description: "Suit",
		price: "$45.00",
	},
];
function ShopAllItems() {
	return (
		<section className="mb-5">
			<div className={`container ${styles.container}`}>
				<div className="row">
					{items.map((item, index) => {
						return (
							<div key={index} className={`col-xl-3 col-md-4 col-6`}>
								<Item item={item} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default ShopAllItems;
