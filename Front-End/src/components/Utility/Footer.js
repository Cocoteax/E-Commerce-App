import React from "react";
import styles from "./Footer.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function Footer() {
	return (
		<section className="mb-4">
			<Container fluid className={`${styles.footer} rounded-3`}>
				<Row
					className={`${styles.subscriptionRow} justify-content-center align-items-center`}
				>
					<Col md={6} className={`py-4 text-center`}>
						<h2 className={`${styles.subscriptionText}`}>
							Subscribe to our newsletter
						</h2>
					</Col>
					<Col md={6}>
						<Container>
							<Row className={`${styles.subscriptionForm}`}>
								<Col md={8}>
									<input
										className="form-control rounded-0"
										placeholder="Your email address..."
									></input>
								</Col>
								<Col md={4}>
									<Button
										variant="dark"
										className={`${styles.subscriptionButton} rounded-0`}
									>
										Subscribe
									</Button>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>

				<Row className={`justify-content-center align-items-center`}>
					<Col className={`py-3 text-center`}>
						<p>Copyright © 2023 E-Commerce | Powered by MERN Stack</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Footer;
