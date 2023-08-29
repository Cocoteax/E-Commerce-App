import React from "react";
import styles from "./Banner.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
import bannerModel2 from "../assets/Banner Model (2).jpeg";
import bannerModel4 from "../assets/Banner Model (4).avif";

function Banner() {
  return (
    <section className="mb-5">
      <Container fluid className={styles.container}>
        <Row className="justify-content-center">
          <Col md={12} className={`${styles.bannerColumn} g-0`}>
            <div className={`carousel slide`} id="slider1">
              <div className={`carousel-inner`}>
                <div className={`carousel-item active ${styles.bannerColumn}`}>
                  <img
                    src={bannerModel2}
                    text="First Slide"
                    alt="Banner Model 1"
                    className={`${styles.image} img-fluid`}
                  />
                  <div
                    className={`carousel-caption d-xs-block ${`${styles.banner1Caption} ${styles.captions}`}`}
                  >
                    <Animated
                      animationIn="rubberBand"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <h2 className="mb-1">Black Friday</h2>
                    </Animated>
                    <Animated
                      animationIn="fadeInUp"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <p className="text-center ps-2 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                      </p>
                    </Animated>
                    <Animated
                      animationIn="fadeInUp"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <Button variant="dark">Shop now</Button>
                    </Animated>
                  </div>
                </div>
                <div className={`carousel-item ${styles.bannerColumn}`}>
                  <img
                    src={bannerModel4}
                    alt="Banner Model 3"
                    text="Second Slide"
                    className={`${styles.image} img-fluid`}
                  />
                  <div
                    className={`carousel-caption d-xs-block  ${`${styles.banner2Caption} ${styles.captions}`}`}
                  >
                    <Animated
                      animationIn="bounceIn"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <h2 className="mb-1">Black Friday</h2>
                    </Animated>
                    <Animated
                      animationIn="fadeInUp"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <p className="text-center ps-2 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                      </p>
                    </Animated>
                    <Animated
                      animationIn="fadeInUp"
                      animationInDuration={1800}
                      animationInDelay={2}
                      isVisible={true}
                    >
                      <Button variant="outline-dark">Shop now</Button>
                    </Animated>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  data-bs-target="#slider1"
                  data-bs-slide="prev"
                >
                  <i
                    className={`fa-solid fa-chevron-left fa-2xl ${styles.carouselArrow}`}
                  ></i>
                </button>
                <button
                  className="carousel-control-next"
                  data-bs-target="#slider1"
                  data-bs-slide="next"
                >
                  <i
                    className={`fa-solid fa-chevron-right fa-2xl ${styles.carouselArrow}`}
                  ></i>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Carousel>
          <Carousel.Item>
            <img
              src={bannerModel2}
              text="First Slide"
              alt="Banner Model 1"
              className={`${styles.image} img-fluid rounded-5`}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={bannerModel3}
              alt="Banner Model 1"
              text="Second Slide"
              className={`${styles.image} img-fluid rounded-5`}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </Container>
    </section>
  );
}

export default Banner;
