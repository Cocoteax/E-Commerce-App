import React, { useState } from "react";
import { Col, Container, Row, Button, Modal, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import Loader from "../Utility/Loader";
import BASE_URL from "../Utility/BaseURL";
import styles from "./CartSection.module.css";
import { toast } from "react-toastify";
import { submitOrder } from "../../store/order-slice";
import { useDispatch } from "react-redux";

function CartSection() {
	const cart = useSelector((state) => state.cartSlice.cart);
	const fetchedCart = useSelector((state) => state.cartSlice.fetchedCart);
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	// Initial submit order button click
	const handleSubmitOrder = () => {
		setShow(true);
	};

    // Button clicks within modal
	const handleCancelModal = () => setShow(false);
	const handleConfirmSubmit = () => {
		dispatch(submitOrder());
		setShow(false);
		toast.success("Order Submitted Successfully!");
	};

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
										<th scope="col">#</th>
										<th scope="col" style={{ width: "17rem" }}>
											Product
										</th>
										<th scope="col">Category</th>
										<th scope="col">Price</th>
										<th scope="col">Quantity</th>
										<th scope="col">Subtotal</th>
									</tr>
								</thead>
								<tbody>
									{cart.cartItems.length !== 0 &&
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
					<Row className={`mb-4`}>
						<Col className={`text-end mt-4`}>
							{cart && <h3>Total: ${cart.totalPrice}.00</h3>}
						</Col>
					</Row>

					{/* MODAL SECTION */}
					<div className={`d-flex justify-content-end`}>
						<Button
							variant="primary"
							onClick={handleSubmitOrder}
							disabled={cart.cartItems.length === 0}
						>
							Submit Order
						</Button>
					</div>

					<Modal show={show} onHide={handleCancelModal} centered size="md">
						<Modal.Header closeButton>
							<Modal.Title>Confirm Order</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Container>
								{cart.length !== 0 &&
									cart.cartItems.map((cartItem, index) => {
										return (
											<Container>
												<Row className={`mb-2`}>
													<Col
														xs={4}
														sm={3}
														className={`${styles.modalCol} d-flex justify-content-end`}
													>
														<Image
															src={`${BASE_URL}/images/${cartItem.product.imageURL}`}
															fluid
															rounded
														></Image>
													</Col>
													<Col
														xs={4}
														sm={3}
														className={`d-flex align-items-center p-0`}
													>
														<Container className={``}>
															<Row className={``}>
																<div className={`${styles.modalProductTitle}`}>
																	{cartItem.product.title}
																</div>
															</Row>
															<Row className={``}>
																<div
																	className={`${styles.modalProductCategory}`}
																>
																	{cartItem.product.category}
																</div>
															</Row>
														</Container>
													</Col>
													<Col className={`d-flex align-items-center p-0`}>
														<Container className={`text-end me-3`}>
															<Row>
																<div
																	className={`${styles.modalProductSubtotal}`}
																>
																	${cartItem.subtotal}.00
																</div>
															</Row>
															<Row>
																<div
																	className={`${styles.modalProductQuantity}`}
																>
																	Qty: {cartItem.quantity}
																</div>
															</Row>
														</Container>
													</Col>
												</Row>
											</Container>
										);
									})}
							</Container>
						</Modal.Body>
						<Modal.Footer>
							<Container className={`text-end mb-2`}>
								<Row>
									<h5 className={`${styles.modalTotalPrice}`}>
										Total Price: ${cart.totalPrice}.00
									</h5>
								</Row>
							</Container>
							<Button variant="secondary" onClick={handleCancelModal}>
								Cancel
							</Button>
							<Button variant="primary" onClick={handleConfirmSubmit}>
								Submit Order
							</Button>
						</Modal.Footer>
					</Modal>
				</Container>
			)}
		</section>
	);
}

export default CartSection;
