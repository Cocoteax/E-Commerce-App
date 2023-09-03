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
						<table className={`table table-bordered table-hover align-middle`}>
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
									cart.items.map((item, index) => {
										return (
											<CartItems key={item._id} item={item} index={index} />
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
