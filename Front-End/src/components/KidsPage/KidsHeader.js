import React from "react";
import {
	Col,
	Container,
	Row,
	Breadcrumb,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import styles from "./KidsHeader.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";
import { fetchKidsProducts } from "../../store/product-slice";

function KidsHeader() {
	const dispatch = useDispatch();
	const filterTitle = useSelector(
		(state) => state.productSlice.menProductsFilter
	);

	// handler for when sorting is clicked
	const sortingHandler = (sortBy) => {
		// Switch statement to handle updating of dropdown title
		switch (sortBy) {
			case "title":
				dispatch(
					productActions.changeKidsProductsFitler({
						filter: "Sort By Name: A to Z",
					})
				);
				break;
			case "price":
				dispatch(
					productActions.changeKidsProductsFitler({
						filter: "Sort By Price: Low to High",
					})
				);
				break;
			case "-price":
				dispatch(
					productActions.changeKidsProductsFitler({
						filter: "Sort By Price: High to Low",
					})
				);
				break;
			default:
				dispatch(
					productActions.changeKidsProductsFitler({
						filter: "Default Sorting",
					})
				);
		}

		// Dispatch action thunk to fetch sorted products
		dispatch(fetchKidsProducts(sortBy));
	};
	return (
		<section className="mt-5 mb-5">
			<Container fluid className={`${styles.container}`}>
				<Row className="mb-5">
					<Col>
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to="/" className={`${styles.breadcrumb}`}>
									Home
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item active>
								<Link to="" className={`${styles.breadcrumb}`}>
									Kids
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<h1 className={`${styles.pageTitle}`}>Kids</h1>
					</Col>
				</Row>
				<Row>
					<Col className={`text-start`}>
						<p className={`${styles.resultNumber}`}>
							Showing 1-8 of 20 results
						</p>
					</Col>
					<Col className={`text-end`}>
						<DropdownButton title={filterTitle} variant="outline-secondary">
							<Dropdown.Item onClick={() => sortingHandler("title")}>
								Sort By Name: A to Z
							</Dropdown.Item>
							<Dropdown.Item onClick={() => sortingHandler("price")}>
								Sort By Price: Low to High
							</Dropdown.Item>
							<Dropdown.Item onClick={() => sortingHandler("-price")}>
								Sort By Price: High to Low
							</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default KidsHeader;
