import React from "react";
import {
	Col,
	Container,
	Row,
	Breadcrumb,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import styles from "./ShopAllHeader.module.css";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../../store/product-slice";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";

function ShopAllHeader() {
	const dispatch = useDispatch();

	// Use redux filterTitle state to maintain the dropdown title
	const filterTitle = useSelector(
		(state) => state.productSlice.allProductsFilter
	);

	// handler for when sorting is clicked
	const sortingHandler = (sortBy) => {
		// Switch statement to handle updating of dropdown title
		switch (sortBy) {
			case "title":
				dispatch(
					productActions.changeAllProductsFilter({
						filter: "Sort By Name: A to Z",
					})
				);
				break;
			case "price":
				dispatch(
					productActions.changeAllProductsFilter({
						filter: "Sort By Price: Low to High",
					})
				);
				break;
			case "-price":
				dispatch(
					productActions.changeAllProductsFilter({
						filter: "Sort By Price: High to Low",
					})
				);
				break;
			case "category":
				dispatch(
					productActions.changeAllProductsFilter({
						filter: "Sort By Category",
					})
				);
				break;
			default:
				dispatch(
					productActions.changeAllProductsFilter({ filter: "Default Sorting" })
				);
		}

		// Dispatch action thunk to fetch sorted products
		dispatch(fetchAllProducts(sortBy));
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
									Shop
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<h1 className={`${styles.pageTitle}`}>Shop</h1>
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
							<Dropdown.Item onClick={() => sortingHandler("category")}>
								Sort By Category
							</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ShopAllHeader;
