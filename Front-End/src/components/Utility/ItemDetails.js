import React from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import styles from "./ItemDetails.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Loader from "./Loader";
import BASE_URL from "../Utility/BaseURL";
import { toast } from "react-toastify";

function ItemDetails() {
	const dispatch = useDispatch();

	// Fetch item details to be displayed from redux store
	const product = useSelector((state) => state.productSlice.singleProduct);

	const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

	// Dispatch action thunk to add to cart
	const addToCartHandler = (product) => {
		dispatch(cartActions.addToCartReducer({ newProduct: product }));
		toast.success("Successfully added to cart!");
	};

	return (
		<section className={`mt-5 mb-5`}>
			{product.length === 0 && <Loader />}
			{product.length !== 0 && (
				<Container fluid className={`${styles.container}`}>
					<Row className={`gy-4`}>
						<Col md={6} className={`d-flex justify-content-center`}>
							<img
								src={`${BASE_URL}/images/${product.imageURL}`}
								className={`${styles.itemImage}`}
								alt="item"
							></img>
						</Col>
						<Col md={6}>
							<Breadcrumb>
								<Breadcrumb.Item>
									<Link to="/" className={`${styles.breadcrumb}`}>
										Home
									</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item>
									<Link
										to=".."
										relative="path"
										className={`${styles.breadcrumb}`}
									>
										Shop All
									</Link>
								</Breadcrumb.Item>
								<Breadcrumb.Item>
									<Link to="" active="true" className={`${styles.breadcrumb}`}>
										{product.title}
									</Link>
								</Breadcrumb.Item>
							</Breadcrumb>
							<h5 className={`mb-3 ${styles.productCategory}`}>
								{product.category}
							</h5>
							<h3 className={`mb-3 ${styles.productName}`}>{product.title}</h3>
							<h4
								className={`mb-3 ${styles.productPrice}`}
							>{`$${product.price}.00`}</h4>
							<p className={`mb-4`}>{product.description}</p>
							{isLoggedIn && (
								<Button
									variant="outline-dark"
									onClick={() => addToCartHandler(product)}
								>
									ADD TO CART
								</Button>
							)}
						</Col>
					</Row>
				</Container>
			)}
		</section>
	);
}

export default ItemDetails;
