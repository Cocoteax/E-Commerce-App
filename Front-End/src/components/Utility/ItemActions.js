import React from "react";
import styles from "./ItemActions.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";

function ItemActions(props) {
	const dispatch = useDispatch();

	// Dispatch action thunk to add to cart
	const addToCartHandler = (event) => {
		event.stopPropagation();
		dispatch(addToCart(props.id));
	};
	return (
		<>
			<div className={`${styles.actionButton}`}>
				<i
					className={`fa-solid fa-cart-plus me-2 ${styles.actionIcon}`}
					onClick={addToCartHandler}
				></i>
				<i className={`fa-regular fa-heart ${styles.actionIcon}`}></i>
			</div>
		</>
	);
}

export default ItemActions;
