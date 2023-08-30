import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./WomenCategory.module.css";
import womenSideBanner from "../../assets/Women Side Banner.avif";
import WomenCategoryCarousel from "./WomenCategoryCarousel";

function WomenCategory() {
  return (
    <section className={`mb-5`}>
      <Container fluid className={`px-0 ${styles.container}`}>
        <Row className={`gx-5 align-items-center`}>
          <Col md={3} className={`${styles.column}`}>
            <div className={`${styles.sideBanner}`}>
              <img
                className={`img-fluid ${styles.sideBannerImg}`}
                src={womenSideBanner}
              ></img>
              <span className={`${styles.sideBannerText}`}>
                <h2 className={`${styles.sideBannerH2}`}>Women's</h2>
                <a className={`${styles.sideBannerA}`} href="#women">
                  Discover More
                </a>
              </span>
            </div>
          </Col>
          <Col md={9} className="">
            <div className={`${styles.womenCarousel} `}>
              <WomenCategoryCarousel />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WomenCategory;
