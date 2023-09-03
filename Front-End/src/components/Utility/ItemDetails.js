import React from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import styles from "./ItemDetails.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import BASE_URL from "../Utility/BaseURL";

function ItemDetails() {
	const dispatch = useDispatch();

	// Fetch item details to be displayed from redux store
	const product = useSelector((state) => state.productSlice.singleProduct);

	// Dispatch action thunk to add to cart
	const addToCartHandler = (productID) => {
		dispatch(addToCart(productID));
	};

	return (
		<section className={`mt-5 mb-5`}>
			{product.length === 0 && (
				<div className="d-flex justify-content-center">
					<div className="spinner-grow text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-secondary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-success" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-danger" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-warning" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-info" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-light" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-dark" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
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
							<Button
								variant="outline-dark"
								onClick={() => addToCartHandler(product._id)}
							>
								ADD TO CART
							</Button>
						</Col>
					</Row>
				</Container>
			)}
		</section>
	);
}

export default ItemDetails;
