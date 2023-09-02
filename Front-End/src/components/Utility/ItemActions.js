import React from "react";
import styles from "./ItemActions.module.css";

function ItemActions(props) {
    const handler = () => {
        console.log(`item ${props.id} clicked`)
    }
	return (
		<>
			<div className={`${styles.actionButton}`}>
				<i class="fa-solid fa-cart-plus me-2" onClick={handler}></i>
				<i className="fa-regular fa-heart"></i>
			</div>
		</>
	);
}

export default ItemActions;
