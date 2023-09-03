import React from "react";
import { Col, Container, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CartHeader.module.css";

function CartHeader() {
	return (
		<section className={`mt-5 mb-3`}>
			<Container className={`${styles.container}`}>
				<Row>
					<Col className={`d-flex flex-column align-items-center`}>
						<h1 className={`mb-3 ${styles.cartHeader}`}>Cart</h1>
						<Breadcrumb className={``}>
							<Breadcrumb.Item>
								<Link to="/" className={`${styles.breadcrumb}`}>
									Home
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								<Link to="" className={`${styles.breadcrumb}`}>
									Cart
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default CartHeader;
