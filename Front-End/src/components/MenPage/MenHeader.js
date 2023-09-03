import React from "react";
import {
	Col,
	Container,
	Row,
	Breadcrumb,
	Dropdown,
	DropdownButton,
} from "react-bootstrap";
import styles from "./MenHeader.module.css";
import { Link } from "react-router-dom";

function MenHeader() {
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
									Men
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<h1 className={`${styles.pageTitle}`}>Men</h1>
					</Col>
				</Row>
				<Row>
					<Col className={`text-start`}>
						<p className={`${styles.resultNumber}`}>
							Showing 1-8 of 20 results
						</p>
					</Col>
					<Col className={`text-end`}>
						<DropdownButton title="Default Sorting" variant="outline-secondary">
							<Dropdown.Item>Sort by popularity</Dropdown.Item>
							<Dropdown.Item>Sort by average rating</Dropdown.Item>
							<Dropdown.Item>Sort by price: low to high</Dropdown.Item>
							<Dropdown.Item>Sort by price: high to low</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default MenHeader;
