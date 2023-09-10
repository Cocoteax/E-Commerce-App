import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import Loader from "../Utility/Loader";

function CartSection() {
	const cart = useSelector((state) => state.cartSlice.cart);
    const fetchedCart = useSelector(state => state.cartSlice.fetchedCart)

	return (
		<section className={`mb-5`}>
			{!fetchedCart && <Loader />}
			{fetchedCart && (
				<Container className={``}>
					<Row className={`justify-content-center`}>
						<Col className={`table-responsive`}>
							<table
								className={`table table-bordered table-hover align-middle`}
							>
								<thead>
									<tr>
										<th scope="col">{cart.cartItems.length}</th>
										<th scope="col">Product</th>
										<th scope="col">Category</th>
										<th scope="col">Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Subtotal</th>
									</tr>
								</thead>
								<tbody>
									{cart.length !== 0 &&
										cart.cartItems.map((cartItem, index) => {
											return (
												<CartItems
													key={cartItem.product._id}
													cartItem={cartItem}
													index={index}
												/>
											);
										})}
								</tbody>
							</table>
						</Col>
					</Row>
					<Row>
						<Col className={`text-end mt-4`}>
							{cart && <h3>Total: ${cart.totalPrice}.00</h3>}
						</Col>
					</Row>
				</Container>
			)}
		</section>
	);
}

export default CartSection;
