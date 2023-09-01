import React from "react";
import { Col, Container, Row, Breadcrumb, Button } from "react-bootstrap";
import item1 from "../../assets/male-shirt-1.webp";
import bannerImg from "../../assets/Featured Side Banner.avif"
import styles from "./ItemDetails.module.css";
import { Link } from "react-router-dom";

function ItemDetails() {
	return (
		<section className={`mt-5 mb-5`}>
			<Container fluid className={`${styles.container}`}>
				<Row className={``}>
					<Col md={6} className={`d-flex justify-content-center`}>
						<img src={bannerImg} className={`${styles.itemImage}`}></img>
					</Col>
					<Col md={6}>
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to="/" className={`${styles.breadcrumb}`}>
									Home
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<Link to="" className={`${styles.breadcrumb}`}>
									Shop All
								</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
								<Link to="" active className={`${styles.breadcrumb}`}>
									Product Name
								</Link>
							</Breadcrumb.Item>
						</Breadcrumb>
						<h5 className={`mb-3 ${styles.productCategory}`}>Product Category</h5>
						<h3 className={`mb-3 ${styles.productName}`}>Product Name</h3>
						<h4 className={`mb-3 ${styles.productPrice}`}>$75.00</h4>
						<p className={`mb-4`}>
							product description lorem Ut quis sollicitudin orci. Aliquam at
							libero non purus sodales sagittis eu ac neque. Nunc ipsum felis,
							vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum
							primis in faucibus orci luctus et ultrices posuere cubilia curae;
							Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis
							tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis
							dapibus dolor, eu venenatis diam nibh id massa. Nulla eget tortor
							ultrices, ultricies turpis a, accumsan turpis. Quisque dignissim
							semper leo ac accumsan. Quisque est nisl, bibendum ut elit quis,
							pellentesque vehicula tellus. Sed luctus mattis ante ac posuere.
						</p>
                        <Button variant="outline-dark" className={``}>ADD TO CART</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ItemDetails;
