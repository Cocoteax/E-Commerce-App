import React from "react";
import styles from "./CategoryBanner.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function CategoryBanner() {
  return (
    <section className={`mb-5`}>
      <Container fluid className={`${styles.container} px-0`}>
        <Row className={`gx-5 gy-3`}>
          <Col md={4} className={`${styles.columnContainer}`}>
            <div
              className={`${styles.categoryLabel} ${styles.mensCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
            >
              <Button variant="light" className={`rounded-0 ${styles.button}`}>
                Men's
              </Button>
            </div>
          </Col>
          <Col md={4} className={`${styles.columnContainer}`}>
            <div
              className={`bg-secondary ${styles.categoryLabel} ${styles.womensCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
            >
              <Button variant="light" className={`rounded-0 ${styles.button}`}>
                Women's
              </Button>
            </div>
          </Col>
          <Col md={4} className={`${styles.columnContainer}`}>
            <div
              className={`${styles.categoryLabel} ${styles.kidsCategoryLabel} d-flex justify-content-center align-items-center rounded-3`}
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
