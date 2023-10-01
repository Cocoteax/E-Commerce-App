import styles from "./Navigation.module.css";
import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth-slice";
import { toast } from "react-toastify";

function Navigation() {
	// Redux state to check if user is logged in
	const isLoggedIn = useSelector((state) => state.authSlice.isLoggedIn);

	const dispatch = useDispatch();

	// Get access to cart total quantity redux state
	const cartTotalQty = useSelector(
		(state) => state.cartSlice.cart.totalQuantity
	);

	// When accessing items details page, SHOP ALL will be the active link
	const params = useParams();
	const url = useLocation().pathname;
	const itemDetailsPage = url.includes(params.productID);

	// Handle user log out
	const handleLogout = () => {
		dispatch(logoutUser());
		toast.success("User successfully logged out!");
	};
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
										isActive || itemDetailsPage
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
									to="products/kids"
									className={({ isActive }) =>
										isActive
											? `${styles.active} mx-3 my-2`
											: `${styles.navLink} mx-3 my-2`
									}
								>
									<span>KIDS</span>
								</NavLink>
								{isLoggedIn && (
									<NavLink
										to="orders"
										className={({ isActive }) =>
											isActive
												? `${styles.active} mx-3 my-2`
												: `${styles.navLink} mx-3 my-2`
										}
									>
										<span>ORDERS</span>
									</NavLink>
								)}
							</Nav>

							<Nav
								className={`ms-auto justify-content-center align-items-center me-4 ${styles.iconNav}`}
							>
								{!isLoggedIn && (
									<div>
										<NavLink
											to="login"
											className={`${styles.icon} ${styles.searchIcon} ${styles.loginLink}`}
										>
											<i className="fa-solid fa-user"></i>
											<span className={`ms-3`}>LOGIN</span>
										</NavLink>
									</div>
								)}
								{isLoggedIn && (
									<div
										className={`d-flex justify-content-between align-items-center ${styles.iconDiv}`}
									>
										<NavLink
											to="search"
											className={`${styles.icon} ${styles.searchIcon}`}
										>
											<i className="fa-solid fa-magnifying-glass"></i>
										</NavLink>
										<NavLink to="cart" className={`${styles.icon}`}>
											<i
												value={cartTotalQty}
												className={`fa-solid fa-cart-shopping ${styles.cart}`}
											></i>
										</NavLink>
										<NavLink
											to="/"
											className={`${styles.icon}`}
											onClick={handleLogout}
										>
											<i class="fa-solid fa-right-from-bracket"></i>
										</NavLink>
									</div>
								)}
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
