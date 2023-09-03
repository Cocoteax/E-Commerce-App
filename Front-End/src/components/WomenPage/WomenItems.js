import React from "react";
import Item from "../Utility/Item";
import { useSelector } from "react-redux";
import styles from "./WomenItems.module.css";

function WomenItems() {
	const items = useSelector((state) => state.productSlice.womenProducts);
	return (
		<section className="mb-5">
			<div className={`container ${styles.container}`}>
				<div className="row">
					{items.map((item) => {
						return (
							<div key={item._id} className={`col-xl-3 col-md-4 col-6`}>
								<Item item={item} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default WomenItems;
