import React from "react";
import Item from "../Utility/Item";
import { useSelector } from "react-redux";
import styles from "./KidsItems.module.css";


function KidsItem() {
	const items = useSelector((state) => state.productSlice.kidsProducts);
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

export default KidsItem;
