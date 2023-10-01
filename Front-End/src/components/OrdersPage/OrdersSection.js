import React, { useState, useEffect } from "react";
import styles from "./OrdersSection.module.css";
import { Container, Row, Col, Alert, Collapse, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function OrdersSection() {
	const orders = useSelector((state) => state.orderSlice.orders);

	// State for handling collapse
	const [open, setOpen] = useState({});

	// Set the first alert to be open initially
	useEffect(() => {
		// Reset open states
		setOpen({});

		// Set the first alert to be open initially
		if (orders.length > 0) {
			const firstOrderId = orders[0]._id;
			setOpen((prevOpen) => ({ ...prevOpen, [firstOrderId]: true }));
		}
	}, [orders]);

	function handleClick(id) {
		setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
	}

	return (
		<section className={`mb-5`}>
			<Container fluid className={`${styles.container}`}>
				{orders.map((order) => {
					return (
						<Row className={`mb-3`}>
							<Alert variant="success" className={`m-0`}>
								<Container>
									<Row className={`${styles.orderHeader} align-items-center`}>
										<Col xs={2}>
											{open[order._id] ? "Order ID" : `#${order._id.slice(-5)}`}
										</Col>
										<Col xs={2}>
											{open[order._id] ? "Customer" : "User Name"}
										</Col>
										<Col xs={2}>
											{open[order._id]
												? "Date"
												: new Date(order.createdAt).toLocaleDateString(
														undefined,
														{ year: "2-digit", month: "short", day: "numeric" }
												  )}
										</Col>
										<Col xs={2}>
											{open[order._id] ? "Price" : `$ ${order.totalPrice}.00`}
										</Col>
										<Col xs={2}>{open[order._id] ? "Status" : "Pending"}</Col>
										<Col xs>
											{open[order._id] ? (
												"Action"
											) : (
												<Col
													xs
													className={`d-flex justify-content-end align-items-center me-4`}
												>
													<i
														className={`fa-solid fa-gear p-2 rounded bg-light ${styles.icon}`}
														onClick={() => handleClick(order._id)}
													></i>
												</Col>
											)}
										</Col>
										<Col
											xs
											className={`d-flex justify-content-end align-items-center me-4`}
										>
											<i
												className={`fa-solid fa-chevron-down p-2 rounded bg-light ${styles.icon}`}
												onClick={() => handleClick(order._id)}
											></i>
										</Col>
									</Row>

									{/* For the collapsed section */}
									{open[order._id] && (
										<>
											<hr className={`w-100`}></hr>
											<Row
												className={`mt-3 ${styles.orderDetails} align-items-center`}
											>
												<Col xs={2}># {order._id.slice(-5)}</Col>
												<Col xs={2}>User Name</Col>
												<Col xs={2}>
													{new Date(order.createdAt).toLocaleDateString(
														undefined,
														{ year: "2-digit", month: "short", day: "numeric" }
													)}
												</Col>
												<Col xs={2}>${order.totalPrice}.00</Col>
												<Col xs={2}>Pending</Col>
												<Col xs>
													<i
														className={`fa-solid fa-gear p-2 rounded bg-light ${styles.icon}`}
														onClick={() => handleClick(order._id)}
													></i>
												</Col>
											</Row>
										</>
									)}

									{/* Order Details Table */}
									<Row className={`${open[order._id] ? "mt-4" : ""}`}>
										<Collapse in={open[order._id]}>
											<div>
												<h4 className={`${styles.orderDetails} mb-3`}>
													Order Details
												</h4>
												<Container>
													<Row>
														<Table
															striped
															hover
															className={`rounded-3 overflow-hidden m-0`}
														>
															<thead>
																<tr>
																	<th>S/N</th>
																	<th>Product Name</th>
																	<th>Quantity</th>
																	<th>Price</th>
																	<th>Subtotal</th>
																</tr>
															</thead>

															<tbody>
																{order.orderItems.map((orderItem, index) => {
																	return (
																		<tr>
																			<td>{index + 1}</td>
																			<td>{orderItem.product.title}</td>
																			<td>{orderItem.quantity}</td>
																			<td>${orderItem.product.price}.00</td>
																			<td>${orderItem.subtotal}.00</td>
																		</tr>
																	);
																})}
																<tr>
																	<td></td>
																	<td colSpan={3}>
																		<h5
																			className={`mt-2 mb-2 ${styles.orderHeader}`}
																		>
																			Total Price
																		</h5>
																	</td>
																	<td>
																		<h5
																			className={`mt-2 mb-2 ${styles.orderHeader}`}
																		>
																			${order.totalPrice}.00
																		</h5>
																	</td>
																</tr>
															</tbody>
														</Table>
													</Row>
												</Container>
											</div>
										</Collapse>
									</Row>
								</Container>
							</Alert>
						</Row>
					);
				})}
			</Container>
		</section>
	);
}

export default OrdersSection;
