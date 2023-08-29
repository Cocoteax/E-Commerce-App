import styles from "./Navigation.module.css";
import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="mt-2 mb-3">
        <Container fluid>
          <Navbar.Brand href="#home" className={`ms-4 ${styles.navBarLogo}`}>
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`${styles.navbarToggler} me-4`}
          >
            <i class="fa-solid fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                E-Commerce
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="ms-auto text-center"
                variant="underline"
                defaultActiveKey="#home"
              >
                <Nav.Link href="#home" className={styles.navLinks}>
                  HOME
                </Nav.Link>
                <Nav.Link href="#shopAll" className={styles.navLinks}>
                  SHOP ALL
                </Nav.Link>
                <Nav.Link href="#men" className={styles.navLinks}>
                  MEN
                </Nav.Link>
                <Nav.Link href="#women" className={styles.navLinks}>
                  WOMEN
                </Nav.Link>
                <Nav.Link href="#blog" className={styles.navLinks}>
                  BLOG
                </Nav.Link>
                <Nav.Link href="#contact" className={styles.navLinks}>
                  CONTACT
                </Nav.Link>
              </Nav>

              <Nav className="ms-auto me-4">
                <div
                  className={`d-flex justify-content-between align-items-center ${styles.iconDiv}`}
                >
                  <Nav.Link
                    href="#search"
                    className={`${styles.icon} ${styles.searchIcon}`}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Nav.Link>
                  <Nav.Link href="#profile" className={styles.icon}>
                    <i class="fa-solid fa-user"></i>
                  </Nav.Link>
                  <Nav.Link href="#profile" className={styles.icon}>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* <Navbar expand="lg" className="mt-2">
      <Container fluid>
        <Navbar.Brand href="#home" className={`ms-4 ${styles.navBarLogo}`}>
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${styles.navbarToggler} me-4`}
        >
          <i class="fa-solid fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto text-center"
            variant="underline"
            defaultActiveKey="#home"
          >
            <Nav.Link href="#home" className={styles.navLinks}>
              HOME
            </Nav.Link>
            <Nav.Link href="#shopAll" className={styles.navLinks}>
              SHOP ALL
            </Nav.Link>
            <Nav.Link href="#men" className={styles.navLinks}>
              MEN
            </Nav.Link>
            <Nav.Link href="#women" className={styles.navLinks}>
              WOMEN
            </Nav.Link>
            <Nav.Link href="#blog" className={styles.navLinks}>
              BLOG
            </Nav.Link>
            <Nav.Link href="#contact" className={styles.navLinks}>
              CONTACT
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto me-4">
            <div
              className={`d-flex justify-content-around align-items-center ${styles.iconDiv}`}
            >
              <Nav.Link
                href="#search"
                className={`${styles.icon} ${styles.searchIcon}`}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link href="#profile" className={styles.icon}>
                <i class="fa-solid fa-user"></i>
              </Nav.Link>
              <Nav.Link href="#profile" className={styles.icon}>
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  );
}

export default Navigation;
