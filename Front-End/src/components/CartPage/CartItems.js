import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cart-slice";

function CartItems(props) {
	const dispatch = useDispatch();
	const addToCartHandler = () => {
		dispatch(addToCart(props.item._id));
	};
	const removeFromCartHandler = () => {
		dispatch(removeFromCart(props.item._id));
	};
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>{props.item.productID.title}</td>
			<td>{props.item.productID.category}</td>
			<td>{props.item.productID.price}</td>
			<td>
				<div className="btn-group" role="group">
					<button
						type="button"
						className="btn btn-outline-dark btn-sm"
						onClick={removeFromCartHandler}
					>
						<i className="fa-solid fa-minus"></i>
					</button>
					<button type="button" className="btn btn-outline-dark btn-sm px-3">
						{props.item.quantity}
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
			<td>${props.item.subtotal}.00</td>
		</tr>
	);
}

export default CartItems;
