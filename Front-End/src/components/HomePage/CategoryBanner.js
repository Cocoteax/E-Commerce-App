import React from "react";
import styles from "./CategoryBanner.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CategoryBanner() {
	const navigate = useNavigate();

	// Navigate to men page
	const goToMensPageHandler = () => {
		navigate("products/men");
		window.scrollTo(0, 0);
	};

	// Navigate to women page
	const goToWomensPageHandler = () => {
		navigate("products/women");
		window.scrollTo(0, 0);
	};

	// Navigate to kids page
	const goToKidsPage = () => {
		navigate("products/kids");
		window.scrollTo(0, 0);
	};

	return (
		<section className={`mb-5`}>
			<Container fluid className={`${styles.container} px-0`}>
				<Row className={`gx-5 gy-3`}>
					<Col md={4} className={`${styles.columnContainer}`}>
						<div
							className={`${styles.categoryLabel} ${styles.mensCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
							onClick={goToMensPageHandler}
						>
							<Button variant="light" className={`rounded-0 ${styles.button}`}>
								Men's
							</Button>
						</div>
					</Col>
					<Col md={4} className={`${styles.columnContainer}`}>
						<div
							className={`bg-secondary ${styles.categoryLabel} ${styles.womensCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
							onClick={goToWomensPageHandler}
						>
							<Button variant="light" className={`rounded-0 ${styles.button}`}>
								Women's
							</Button>
						</div>
					</Col>
					<Col md={4} className={`${styles.columnContainer}`}>
						<div
							className={`${styles.categoryLabel} ${styles.kidsCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
							onClick={goToKidsPage}
						>
							<Button variant="light" className={`rounded-3 ${styles.button}`}>
								Kid's
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default CategoryBanner;
