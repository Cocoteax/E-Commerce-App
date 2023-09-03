import styles from "./Navigation.module.css";
import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
	return (
		<>
			<Navbar expand="lg" className="mt-2 mb-3">
				<Container fluid>
					<Navbar.Brand className="ms-4">
						<NavLink to="/" className={`${styles.navBarLogo}`}>
							E-Commerce
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						className={`${styles.navbarToggler} me-4`}
					>
						<i className="fa-solid fa-bars"></i>
					</Navbar.Toggle>
					<Navbar.Offcanvas placement="end">
						<Offcanvas.Header closeButton>
							<Offcanvas.Title
								id={`offcanvasNavbarLabel-expand-lg`}
								className={styles.navBarLogo}
							>
								E-Commerce
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="ms-auto text-center justify-content-center align-items-center">
								<NavLink
									to=""
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>HOME</span>
								</NavLink>
								<NavLink
									to="products"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
                                    end
								>
									<span>SHOP ALL</span>
								</NavLink>
								<NavLink
									to="products/men"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>MEN</span>
								</NavLink>
								<NavLink
									to="products/women"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>WOMEN</span>
								</NavLink>
								<NavLink
									to="kids"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>KIDS</span>
								</NavLink>
								<NavLink
									to="blog"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>BLOG</span>
								</NavLink>
								<NavLink
									to="contact"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>CONTACT</span>
								</NavLink>
							</Nav>

							<Nav
								className={`ms-auto justify-content-center align-items-center me-4 ${styles.iconNav}`}
							>
								<div
									className={`d-flex justify-content-between align-items-center ${styles.iconDiv}`}
								>
									<NavLink
										to="search"
										className={`${styles.icon} ${styles.searchIcon}`}
									>
										<i className="fa-solid fa-magnifying-glass"></i>
									</NavLink>
									<NavLink
										to="profile"
										className={`${styles.icon} ${styles.searchIcon}`}
									>
										<i className="fa-solid fa-user"></i>
									</NavLink>
									<NavLink
										to="cart"
										className={`${styles.icon} ${styles.searchIcon}`}
									>
										<i
											value={"12"}
											className={`fa-solid fa-cart-shopping ${styles.cart}`}
										></i>
									</NavLink>
								</div>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
