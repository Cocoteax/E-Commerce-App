import styles from "./ShopAllItems.module.css";
import Item from "../Utility/Item";
import { useSelector } from "react-redux";

function ShopAllItems() {
	const items = useSelector((state) => state.productSlice.allProducts);
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

export default ShopAllItems;
