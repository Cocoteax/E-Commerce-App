import React from "react";
import styles from "./ShopAllItems.module.css";
import womenShirt1 from "../../assets/women-shirt-1.webp";
import womenShirt3 from "../../assets/women-shirt-3.webp";
import maleShirt1 from "../../assets/male-shirt-1.webp";
import Item from "../Utility/Item";

// // Need to hardcode these data in mongodb to create schema relationships
const items = [
	{
		img: womenShirt1,
		category: "Women",
		description: "Purple ",
		price: "$32.00",
	},
	{
		img: maleShirt1,
		category: "Men",
		description: "Button ",
		price: "$28.00",
	},
	{
		img: womenShirt3,
		category: "Women",
		description: "Pineapple ",
		price: "$45.00",
	},
	{
		img: womenShirt1,
		category: "Women",
		description: "Purple ",
		price: "$32.00",
	},
	{
		img: maleShirt1,
		category: "Men",
		description: "Button Shirt",
		price: "$28.00",
	},
	{
		img: womenShirt3,
		category: "Women",
		description: "Pineapple Sweater",
		price: "$45.00",
	},
	{
		img: womenShirt1,
		category: "Women",
		description: "Purple Cardigan",
		price: "$32.00",
	},
	{
		img: maleShirt1,
		category: "Men",
		description: "Button Shirt",
		price: "$28.00",
	},
	{
		img: womenShirt3,
		category: "Women",
		description: "Pineapple Sweater",
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
