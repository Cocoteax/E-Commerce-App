import React from "react";
import styles from "./OrdersHeader.module.css";
import {
	Col,
	Container,
	Row,
	Breadcrumb,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OrdersHeader() {
	const orders = useSelector((state) => state.orderSlice.orders);
	return (
		<section className="mt-5 mb-5">
			<Container fluid className={`${styles.container}`}>
				<Row className="mb-4">
					<Col>
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to="/" className={`${styles.breadcrumb}`}>
									Home
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								<Link to="" className={`${styles.breadcrumb}`}>
									Orders
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<h1 className={`${styles.pageTitle}`}>Orders</h1>
					</Col>
				</Row>
				<Row>
					<Col className={`text-start`}>
						<p className={`${styles.resultNumber}`}>
							Showing {orders && orders.length} orders
						</p>
					</Col>
					<Col className={`text-end`}>
						<DropdownButton title="Default Sorting" variant="outline-secondary">
							<Dropdown.Item>Sort By Name: A to Z</Dropdown.Item>
							<Dropdown.Item>Sort By Price: Low to High</Dropdown.Item>
							<Dropdown.Item>Sort By Price: High to Low</Dropdown.Item>
							<Dropdown.Item>Sort By Category</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default OrdersHeader;
