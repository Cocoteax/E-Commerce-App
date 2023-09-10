import React from "react";
import Item from "../Utility/Item";
import { useSelector } from "react-redux";
import styles from "./WomenItems.module.css";
import Loader from "../Utility/Loader";

function WomenItems() {
	const items = useSelector((state) => state.productSlice.womenProducts);
	const fetchedWomenProducts = useSelector(
		(state) => state.productSlice.fetchedWomenProducts
	);
	return (
		<section className="mb-5">
			{!fetchedWomenProducts && <Loader />}
			{fetchedWomenProducts && (
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
			)}
		</section>
	);
}

export default WomenItems;
