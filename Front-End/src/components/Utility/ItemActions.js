import React from "react";
import styles from "./ItemActions.module.css";

function ItemActions() {
	return (
		<>
			<div className={`${styles.actionButton}`}>
				<i class="fa-solid fa-cart-plus me-2"></i>
				<i className="fa-regular fa-heart"></i>
			</div>
		</>
	);
}

export default ItemActions;
