import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";
import styles from "./CartItems.module.css";

function CartItems(props) {
	// Destructure cart item from props using nested destructuring
	const {
		cartItem: {
			product,
			product: { title, _id: productID, category, price },
			quantity,
			subtotal,
		},
	} = props;

	const dispatch = useDispatch();

	// Handle the adding/removing from cut using redux reducers
	// NOTE: By using redux reducers and not sending a POST/DELETE request straight away, we can focus on responsiveness because request will be sent after ui changes
	const addToCartHandler = () => {
		dispatch(cartActions.addToCartReducer({ newProduct: product })); // Pass in the product to be added
	};
	const removeFromCartHandler = () => {
		dispatch(
			cartActions.removeFromCartReducer({
				productID: productID,
			})
		);
	};
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				<Link
					to={`../products/${productID}`}
					relative="path"
					className={`${styles.productTitle}`}
				>
					{title}
				</Link>
			</td>
			<td>{category}</td>
			<td>${price}.00</td>
			<td>
				<div className="btn-group" role="group">
					<button
						type="button"
						className="btn btn-outline-dark btn-sm"
						onClick={removeFromCartHandler}
					>
						<i className="fa-solid fa-minus"></i>
					</button>
					<button
						type="button"
						className="btn btn-outline-dark btn-sm px-3"
						disabled
					>
						{quantity}
					</button>
					<button
						type="button"
						className="btn btn-outline-dark btn-sm"
						onClick={addToCartHandler}
					>
						<i className="fa-solid fa-plus"></i>
					</button>
				</div>
			</td>
			<td>${subtotal}.00</td>
		</tr>
	);
}

export default CartItems;
