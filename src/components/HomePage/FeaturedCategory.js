import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./FeaturedCategory.module.css";
import featuredSideBanner from "../../assets/Featured Side Banner.avif";
import FeaturedCarousel from "./FeaturedCarousel";

function WomenCategory() {
  return (
    <section className={`mb-5`}>
      <Container fluid className={`px-0 ${styles.container}`}>
        <Row className={`gx-5 align-items-center`}>
          <Col md={3} className={`${styles.column}`}>
            <div className={`${styles.sideBanner}`}>
              <img
                className={`img-fluid ${styles.sideBannerImg}`}
                src={featuredSideBanner}
              ></img>
              <span className={`${styles.sideBannerText}`}>
                <h2 className={`${styles.sideBannerH2}`}>Featured</h2>
                <a className={`${styles.sideBannerA}`} href="#shopAll">
                  Discover More
                </a>
              </span>
            </div>
          </Col>
          <Col md={9} className="">
            <div>
              <FeaturedCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WomenCategory;
