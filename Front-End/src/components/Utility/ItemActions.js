import React from "react";
import styles from "./ItemActions.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

function ItemActions(props) {
	// Destructure item from props
	const { item } = props;
	const dispatch = useDispatch();

	// Add to cart using our redux reducer
	const addToCartHandler = (event) => {
		event.stopPropagation();
		dispatch(cartActions.addToCartReducer({ newProduct: item}));
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
