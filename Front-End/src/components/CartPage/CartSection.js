import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

function CartSection() {
	const cart = useSelector((state) => state.cartSlice.cart);

	return (
		<section className={`mb-5`}>
			<Container className={``}>
				<Row className={`justify-content-center`}>
					<Col className={``}>
						<table
							className={`table table-bordered table-hover align-middle table-responsive`}
						>
							<thead>
								<tr>
									<th scope="col">#</th>
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
		</section>
	);
}

export default CartSection;
