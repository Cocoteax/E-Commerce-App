import styles from "./ShopAllItems.module.css";
import Item from "../Utility/Item";
import { useSelector } from "react-redux";
import Loader from "../Utility/Loader";

function ShopAllItems() {
	const items = useSelector((state) => state.productSlice.allProducts);
	const fetchedAllProducts = useSelector(
		(state) => state.productSlice.fetchedAllProducts
	);
	return (
		<section className="mb-5">
			{!fetchedAllProducts && <Loader />}
			{fetchedAllProducts && (
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

export default ShopAllItems;
